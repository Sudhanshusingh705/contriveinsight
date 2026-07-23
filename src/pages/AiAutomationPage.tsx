import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Bot, Workflow, Database, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Workflow Automation",
    description: "Reduce repetitive manual work with smart automations that connect your tools and speed up operations.",
  },
  {
    title: "AI Assistants",
    description: "Deploy intelligent copilots and assistants that help teams answer questions, summarize data, and take action.",
  },
  {
    title: "Business Dashboards",
    description: "Bring data together in one place so leaders can monitor performance and make faster decisions.",
  },
  {
    title: "System Integrations",
    description: "Connect your CRM, ERP, analytics, and support tools into one reliable digital workflow.",
  },
];

const AiAutomationPage = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                AI & Automation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Put your operations on autopilot with practical AI solutions
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We help ambitious teams automate repetitive work, improve response times, and unlock better decision-making with AI-powered systems that are built for real business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
              <div className="glass-card rounded-3xl p-8 lg:p-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Built for growth teams, operations, and service businesses
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From internal copilots to automated workflows and connected dashboards, we design solutions that save time, reduce errors, and give your team more room to focus on high-value work.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">AI assistants</span>
                  <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">Workflow automations</span>
                  <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">Smart integrations</span>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Workflow className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">What we deliver</h3>
                </div>
                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="rounded-2xl border border-border/60 p-4">
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-secondary/20 p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <Database className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Ready to automate?</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">Let’s design a smarter workflow for your business</h2>
                  <p className="text-muted-foreground max-w-2xl">
                    We’ll help you identify the right automation opportunities and turn them into a practical system that saves time and boosts performance.
                  </p>
                </div>
                <Link to="/contact">
                  <Button variant="hero" className="group">
                    Start a Conversation
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiAutomationPage;
