import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LeadRequest {
  name: string;
  email: string;
  message?: string;
  source?: "contact_form" | "start_project";
  project_type?: string;
  budget?: string;
  timeline?: string;
  metadata?: Record<string, unknown>;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate request body
    const body: LeadRequest = await req.json();
    console.log("Received lead submission:", { ...body, email: "***" });

    // Validation
    const errors: string[] = [];
    
    if (!body.name || body.name.trim().length < 2) {
      errors.push("Name must be at least 2 characters");
    }
    if (body.name && body.name.length > 100) {
      errors.push("Name must be less than 100 characters");
    }
    if (!body.email || !emailRegex.test(body.email)) {
      errors.push("Valid email is required");
    }
    if (body.email && body.email.length > 255) {
      errors.push("Email must be less than 255 characters");
    }
    if (body.message && body.message.length > 2000) {
      errors.push("Message must be less than 2000 characters");
    }

    if (errors.length > 0) {
      console.log("Validation errors:", errors);
      return new Response(
        JSON.stringify({ success: false, errors }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store lead in database
    const { data: lead, error: dbError } = await supabase
      .from("leads")
      .insert({
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        message: body.message?.trim() || null,
        source: body.source || "contact_form",
        project_type: body.project_type || null,
        budget: body.budget || null,
        timeline: body.timeline || null,
        metadata: body.metadata || {},
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to save your inquiry" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Lead saved successfully:", lead.id);

    // Send email notification using Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const sourceLabel = body.source === "start_project" ? "Start Project Request" : "Contact Form";
        const projectInfo = body.project_type 
          ? `<p><strong>Project Type:</strong> ${body.project_type}</p>
             <p><strong>Budget:</strong> ${body.budget || "Not specified"}</p>
             <p><strong>Timeline:</strong> ${body.timeline || "Not specified"}</p>`
          : "";

        // Notification to studio
        const studioEmailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Indievision Studios <onboarding@resend.dev>",
            to: ["hello@indievisionstudios.com"],
            subject: `New ${sourceLabel} from ${body.name}`,
            html: `
              <h2>New Inquiry Received</h2>
              <p><strong>Source:</strong> ${sourceLabel}</p>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              ${projectInfo}
              <p><strong>Message:</strong></p>
              <p>${body.message || "No message provided"}</p>
              <hr>
              <p><small>Lead ID: ${lead.id} | Received: ${new Date().toISOString()}</small></p>
            `,
          }),
        });

        if (!studioEmailRes.ok) {
          console.error("Failed to send studio email:", await studioEmailRes.text());
        }

        // Confirmation to user
        const userEmailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Indievision Studios <onboarding@resend.dev>",
            to: [body.email],
            subject: "We received your message - Indievision Studios",
            html: `
              <h2>Thank you for reaching out, ${body.name}!</h2>
              <p>We've received your inquiry and our team will get back to you within 24-48 hours.</p>
              <p>In the meantime, feel free to explore our portfolio and showreel.</p>
              <br>
              <p>Best regards,</p>
              <p><strong>Indievision Studios Team</strong></p>
              <p>India</p>
            `,
          }),
        });

        if (!userEmailRes.ok) {
          console.error("Failed to send user email:", await userEmailRes.text());
        }

        console.log("Emails sent successfully");
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
    } else {
      console.log("RESEND_API_KEY not configured, skipping emails");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you! We'll be in touch soon.",
        lead_id: lead.id 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error) {
    console.error("Error processing lead:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Something went wrong. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
