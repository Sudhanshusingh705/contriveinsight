import { TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "Digital Commerce Platform",
    industry: "Retail",
    result: "30% faster order processing",
    description: "We helped a retail brand simplify operations with a modern web platform and connected workflows.",
    stats: { metric: "3x", label: "Faster", timeline: "8 weeks" },
  },
  {
    title: "Streaming App Launch",
    industry: "Media & Entertainment",
    result: "5x subscriber growth in 6 months",
    description: "A scalable OTT experience was built to support content delivery, subscriptions, and audience engagement.",
    stats: { metric: "5x", label: "Growth", timeline: "6 months" },
  },
  {
    title: "Business Automation Suite",
    industry: "Operations",
    result: "40% fewer manual errors",
    description: "We automated reporting and approvals across teams, making day-to-day operations more efficient and reliable.",
    stats: { metric: "40%", label: "Less effort", timeline: "10 weeks" },
  },
];

const CaseStudies = () => {
  return (
    <section id="results" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Results & Industries
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Practical outcomes across modern businesses
            </h2>
            <p className="text-muted-foreground text-lg">
              Our work supports digital growth, smoother operations, and stronger customer experiences across industries.
            </p>
          </div>
          <div className="flex items-center gap-3 glass-card px-6 py-4 rounded-xl">
            <TrendingUp className="w-6 h-6 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Business challenges solved</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {study.industry}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-1">
                  {study.title}
                </h3>
                <div className="text-2xl font-bold gradient-text">
                  {study.result}
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{study.stats.metric}</div>
                    <div className="text-xs text-muted-foreground">{study.stats.label}</div>
                  </div>
                  <div className="text-center col-span-2">
                    <div className="text-lg font-bold text-foreground">{study.stats.timeline}</div>
                    <div className="text-xs text-muted-foreground">Delivery time</div>
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

export default CaseStudies;
