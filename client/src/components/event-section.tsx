import { motion } from "framer-motion";
import { Event } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";

interface EventSectionProps {
  events: Event[];
}

export function EventSection({ events }: EventSectionProps) {
  return (
    <section id="events" className="px-8 py-16 md:py-24 max-w-[1920px] mx-auto border-t border-border mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
      >
        <div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground text-lg max-w-[50ch]">
            Join us at our exclusive travel and lifestyle gatherings around the globe.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-muted/30 border border-white/5 hover:border-primary/50 transition-colors"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-secondary" />
                  <span className="text-sm font-medium">{event.location}</span>
                </div>
              </div>
              <button className="mt-6 w-full py-3 bg-white/5 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all font-medium border border-white/10 hover:border-primary">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
