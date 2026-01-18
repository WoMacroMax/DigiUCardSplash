import { motion } from "framer-motion";
import { DigiUCardPreview } from "@/lib/data";
import { ExternalLink, CreditCard, Share2 } from "lucide-react";

interface CardShowcaseProps {
  cards: DigiUCardPreview[];
}

export function CardShowcase({ cards }: CardShowcaseProps) {
  return (
    <section className="px-8 py-16 md:py-24 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col h-full bg-card/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-xl"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground">{card.type}</span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3 flex-grow">
                {card.description}
              </p>
              
              <div className="flex items-center gap-3">
                <a 
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow flex items-center justify-center gap-2 py-2.5 bg-primary/10 hover:bg-primary text-primary-foreground rounded-xl transition-all font-semibold text-xs border border-primary/20"
                >
                  Preview <ExternalLink size={12} />
                </a>
                <button className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                  <Share2 size={14} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Aesthetic card chip indicator */}
            <div className="absolute top-4 left-6 flex gap-1 opacity-40">
              <div className="w-8 h-5 rounded-sm bg-accent/20 border border-accent/30" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
