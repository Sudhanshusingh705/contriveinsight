import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Monitor,
    title: "Websites & Portals",
    description: "Modern, responsive digital experiences for customers, employees, and partners.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Intuitive Android and iOS applications built for everyday use and long-term growth.",
  },
  {
    icon: Workflow,
    title: "Custom Software",
    description: "Tailored workflows, integrations, and internal tools that simplify operations.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Platforms",
    description: "Secure and scalable platforms that support growth across business functions.",
  },
];

const DigitalEngineeringPage = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Digital Engineering
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Build digital products that are designed around your business goals. From websites and mobile apps to custom software and business portals, we create secure, scalable, and user-friendly applications that help you work smarter and grow faster.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/30 p-8 md:p-10 mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Build Digital Products</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Turn your ideas into powerful digital solutions with product strategy, design, development, and deployment support.
              </p>
              <Link to="/contact">
                <Button variant="hero" className="group">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="glass-card rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalEngineeringPage;
