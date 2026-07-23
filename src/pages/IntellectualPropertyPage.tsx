import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, FileText, FolderOpen, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Patent Search & Analysis",
    description: "Assess patentability and understand competitive landscapes before taking action.",
  },
  {
    icon: FileText,
    title: "Patent Filing",
    description: "Draft and prepare strong applications that support long-term protection.",
  },
  {
    icon: FolderOpen,
    title: "Portfolio Management",
    description: "Coordinate maintenance, renewals, licensing, and portfolio strategy with clarity.",
  },
  {
    icon: ShieldCheck,
    title: "IP Strategy",
    description: "Create practical strategies aligned with your growth, funding, and commercialization goals.",
  },
];

const IntellectualPropertyPage = () => {
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
                Intellectual Property Services
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Protect your ideas with strategic support that covers patent research, filings, portfolio management, and long-term IP planning.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/30 p-8 md:p-10 mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Protect What You Create</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We help innovators safeguard their ideas and build strong foundations for growth and commercialization.
              </p>
              <Link to="/contact">
                <Button variant="hero" className="group">
                  Talk to Our Experts
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="glass-card rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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

export default IntellectualPropertyPage;
