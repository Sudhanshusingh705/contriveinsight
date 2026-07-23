import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, Building2, MessageSquare, Phone, Send } from "lucide-react";

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("full_name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const companyName = formData.get("company_name")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const payload = {
      full_name: fullName,
      fullname: fullName,
      name: fullName,
      from_name: fullName,
      email,
      phone,
      company_name: companyName,
      company: companyName,
      company_name_value: companyName,
      message,
      to_email: "himanshu@contriveninsight.com",
      reply_to: email,
    };

    try {
      const serviceId = "service_tp8cqrp";
      const templateId = "template_si1q0xa";
      const publicKey = "NYzri3foMQo0M7yNF";

      await emailjs.send(serviceId, templateId, payload, publicKey);
      setStatus("Thank you! Your enquiry has been sent successfully.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please email us directly at himanshu@contriveninsight.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input name="full_name" required placeholder="Your name" className="pl-10 h-12" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input name="email" type="email" required placeholder="you@company.com" className="pl-10 h-12" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input name="phone" placeholder="+91 00000 00000" className="pl-10 h-12" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Company Name</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input name="company_name" placeholder="Your company" className="pl-10 h-12" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Message</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted-foreground" />
          <Textarea name="message" required rows={5} placeholder="Tell us about your idea, product, or query..." className="pl-10 resize-none" />
        </div>
      </div>

      <p className="text-sm text-muted-foreground">All fields are required.</p>

      <Button type="submit" variant="hero" className="w-full group h-12 sm:h-11" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Enquiry"}
        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>

      {status && <p className="text-sm text-primary">{status}</p>}
    </form>
  );
};

export default LeadForm;
