import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";
import { Sparkles } from "lucide-react";

const LeadPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pr-10">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Let’s talk</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl">Tell us about your idea</DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-muted-foreground">
            Share your project, automation goal, or IP question and we’ll help you take the next step.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2">
          <LeadForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopup;
