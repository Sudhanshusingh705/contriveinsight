import { Compass, Target, Sparkles, Handshake } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "About Us",
    description: "Every business faces different challenges, and we work closely with clients to understand goals before building practical technology solutions.",
  },
  {
    icon: Target,
    title: "Mission",
    description: "Our mission is to help businesses grow through reliable, high-quality, and cost-effective technology that improves efficiency and creates value.",
  },
  {
    icon: Sparkles,
    title: "Vision",
    description: "We aim to become a trusted technology partner for businesses while creating space for our team to learn, collaborate, and grow.",
  },
  {
    icon: Handshake,
    title: "Values",
    description: "We believe in respect, ownership, transparency, continuous learning, quality, integrity, and positive collaboration.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(174_72%_40%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            About ContriveInsight
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We build practical digital solutions with strategy, technology, and execution in mind
          </h2>
          <p className="text-muted-foreground text-lg">
            From product strategy and software development to OTT platforms, AI automation, and IP protection, we help businesses move from vision to delivery with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group glass-card rounded-2xl p-8 hover:bg-secondary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
