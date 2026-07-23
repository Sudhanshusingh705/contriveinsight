import { Monitor, Smartphone, Bot, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Digital Engineering",
    description: "Build websites, mobile apps, custom software, and business portals that are secure, scalable, and user-friendly.",
    features: ["Website development", "Mobile app development", "Custom software", "Enterprise portals"],
    href: "/services/digital-engineering",
  },
  {
    icon: Smartphone,
    title: "OTT Platform",
    description: "Launch streaming experiences with live video, VOD, subscriptions, analytics, monetization, and content delivery.",
    features: ["Live streaming", "Subscription management", "Video analytics", "Multi-device distribution"],
    href: "/services/ott-platform",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Automate repetitive work with AI assistants, workflow automation, API integrations, and business dashboards.",
    features: ["AI automation", "Process automation", "API integration", "Business intelligence"],
    href: "/services/ai-automation",
  },
  {
    icon: ShieldCheck,
    title: "Intellectual Property",
    description: "Protect your ideas with patent strategy, filing support, and long-term portfolio management.",
    features: ["Patent filing", "Search & analysis", "Trade Market Filing", "IP strategy"],
    href: "/services/intellectual-property",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions That Support Growth at Every Stage
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            From digital products to automation and IP protection, we help businesses move from idea to impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative glass-card rounded-2xl p-6 sm:p-8 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.href}>
                      <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
