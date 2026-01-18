import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin, Sparkles } from "lucide-react";

const specialEvents = [
  {
    id: "special-1",
    title: "Global Identity Summit",
    description: "Join WoMacroMax at the forefront of digital evolution. Exploring the future of modular identity.",
    date: "November 12, 2026",
    location: "Stockholm, Sweden",
    url: "https://womacromax.com",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768860091-image.png"
  },
  {
    id: "special-2",
    title: "Digital Sovereignty Workshop",
    description: "Exclusive deep dive into the technology powering DigiUCard and the new creator economy.",
    date: "December 05, 2026",
    location: "Virtual Experience",
    url: "https://womacromax.com",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769128792-image.png"
  }
];

export function SpecialEvents() {
  return (
    <section id="special-events" className="px-8 py-16 md:py-24 max-w-[1400px] mx-auto border-t border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-[60ch]">
          <div className="flex items-center gap-2 text-blue-600 mb-4 font-semibold tracking-widest uppercase text-xs">
            <Sparkles size={16} />
            <span>Exclusive Access</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900">Special Events</h2>
          <p className="text-slate-500 text-lg mt-4">
            Curated experiences and insights from the WoMacroMax ecosystem.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specialEvents.map((event, index) => (
          <motion.a
            key={event.id}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative block overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-xs font-medium text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-blue-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-purple-600" />
                    {event.location}
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {event.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
                  View Details <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
