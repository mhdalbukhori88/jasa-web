import Icon from "./Icon";
import { whatsappLink } from "@/config/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
      <Icon name="whatsapp" size={28} className="relative" />
    </a>
  );
}
