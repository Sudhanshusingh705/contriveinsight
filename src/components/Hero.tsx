import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_40%_/_0.1)_0%,_transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-4 animate-fade-in-up">
            Digital products and strategy that help ambitious businesses
            <span className="gradient-text"> move faster</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-8 animate-fade-in-up animation-delay-200 tracking-wide">
            ContriveInsight partners with founders and teams to build software, OTT platforms, AI automation, and IP solutions that solve real problems and support steady growth.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-400">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Explore Our Services
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-500">
            <span className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm">
              Custom product strategy
            </span>
            <span className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm">
              Fast delivery
            </span>
            <span className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm">
              End-to-end support
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
