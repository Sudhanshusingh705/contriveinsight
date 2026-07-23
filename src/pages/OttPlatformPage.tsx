import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, BarChart3, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: PlayCircle,
    title: "Live Streaming & VOD",
    description: "Launch a complete streaming experience with live and on-demand content delivery.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track engagement, watch time, subscriptions, revenue, traffic, and marketing performance.",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-device Distribution",
    description: "Reach viewers across Smart TVs, mobile devices, tablets, and web browsers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Monetization",
    description: "Support subscriptions, offline downloads, and secure content management at scale.",
  },
];

const OttPlatformPage = () => {
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
                OTT Platform
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Launch a complete streaming platform with live streaming, video-on-demand, subscriptions, analytics, monetization, user management, and secure content delivery.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/30 p-8 md:p-10 mb-12">
              <h2 className="text-3xl font-semibold text-foreground mb-4">Distribute Your Content Far and Wide</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Deliver your content across modern devices while giving your audience a seamless viewing experience.
              </p>
              <Link to="/contact">
                <Button variant="hero" className="group">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="glass-card rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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

export default OttPlatformPage;
