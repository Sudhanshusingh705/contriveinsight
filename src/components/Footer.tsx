import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import LeadForm from "@/components/LeadForm";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 lg:gap-12">
            <div className="rounded-3xl border border-border/60 bg-background/80 p-6 sm:p-8 shadow-sm">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Let&apos;s Build Something That Moves Your Business Forward
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl">
                Share your idea, product goal, or automation challenge and we&apos;ll help you shape a practical digital solution.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="rounded-2xl border border-border/60 bg-secondary/40 p-4 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">Call</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <a href="tel:+918130616883" className="block text-primary hover:underline">
                      +91 81306 16883
                    </a>
                    <a href="tel:+917015189070" className="block text-primary hover:underline">
                      +91 70151 89070
                    </a>
                  </div>
                </div>

                <a href="mailto:himanshu@contriveninsight.com" className="rounded-2xl border border-border/60 bg-secondary/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">Email</span>
                  </div>
                  <p className="break-email text-sm text-muted-foreground">himanshu@contriveninsight.com</p>
                </a>

                <div className="rounded-2xl border border-border/60 bg-secondary/40 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">Visit</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Delhi, India</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://wa.me/918130616883" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="ContriveInsight" className="w-10 h-10 object-contain" />
                <span className="text-xl font-bold text-foreground">
                  Contrive<span className="text-primary">Insight</span>
                </span>
              </Link>
              <span className="text-muted-foreground text-sm">
                © 2025 ContriveInsight. All rights reserved.
              </span>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/process" className="text-muted-foreground hover:text-primary transition-colors">
                Process
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Quick Contact */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:himanshu@contriveninsight.com"
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:+918130616883"
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/60 text-center text-sm text-muted-foreground">
            Powered by{" "}
            <a
              href="https://cryonixglobal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Cryonix Global
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
