import { MessageCircle } from "lucide-react";

const phoneNumber = "918130616883";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello ContriveInsight, I would like to discuss a project.")}`;

const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ContriveInsight on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppFloat;
