import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@indievision.com", label: "Email" },
];

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-foreground"
            >
              INDIEVISION
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed text-sm sm:text-base">
              A boutique film & media production company crafting cinematic
              stories that captivate audiences and elevate brands.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="mailto:hello@indievisionstudios.com" className="hover:text-foreground transition-colors">
                  hello@indievisionstudios.com
                </a>
              </li>
              <li>India</li>
              <li className="text-xs sm:text-sm">Available worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {currentYear} Indievision Studios. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors py-1">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors py-1">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
