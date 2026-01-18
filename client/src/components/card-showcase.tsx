import { motion } from "framer-motion";
import { DigiUCardPreview } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface CardShowcaseProps {
  cards: DigiUCardPreview[];
}

export function CardShowcase({ cards }: CardShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.25)] flex flex-col h-full"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-8 bg-white/5">
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="space-y-4 flex-grow">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                {card.type}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold group-hover:text-blue-500 transition-colors">
              {card.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
          <div className="pt-6">
            <a 
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn"
            >
              Learn More 
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover/btn:bg-white group-hover/btn:text-black">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
