import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Hero */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Contact Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let&apos;s Talk About Your
                <span className="gradient-text"> Next Digital Move</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg">
                Whether you need a product, a platform, automation, or IP protection, we&apos;ll help you turn the idea into a reliable solution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <div className="glass-card rounded-2xl p-5 sm:p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                   <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                   <p className="text-muted-foreground mb-2">We're here to help</p>
                   <div className="space-y-2">
                     <a href="tel:+918130616883" className="text-primary hover:underline block">
                       +91 81306 16883
                     </a>
                     <a href="tel:+917015189070" className="text-primary hover:underline block">
                       +91 70151 89070
                     </a>
                   </div>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                   <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                   <p className="text-muted-foreground mb-2">For inquiries</p>
                   <a href="mailto:himanshu@contriveninsight.com" className="break-email text-primary hover:underline block">
                     himanshu@contriveninsight.com
                   </a>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-2">Our office</p>
                  <p className="text-foreground">Delhi, India</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">Schedule a Consultation</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and one of our IP specialists will get back to you within 24 hours.
                  </p>
                  
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
