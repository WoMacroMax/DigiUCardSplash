import { motion } from "framer-motion";
import { ExternalLink, Play, Sparkles } from "lucide-react";
import { useState } from "react";

const ads = [
  {
    id: "ad-1",
    title: "CPet Digital Ad",
    description: "High-impact digital marketing showcase for CPet identity solutions.",
    url: "https://digiucard.com/CPetAd",
    videoUrl: "https://digiucard.com/CPetAd", // For mockup purposes, we'll use an iframe
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768001227-image.png"
  },
  {
    id: "ad-2",
    title: "Hairs2You Campaign",
    description: "Modern beauty and wellness digital advertising experience.",
    url: "https://digiucard.com/Hairs2YouAD",
    videoUrl: "https://digiucard.com/Hairs2YouAD",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769005067-image.png"
  },
  {
    id: "ad-3",
    title: "Celina Hope AD",
    description: "Impactful brand storytelling through the Celina Hope digital player.",
    url: "https://digiucard.com/player/CelinaHopeAD00",
    videoUrl: "https://digiucard.com/player/CelinaHopeAD00",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769128792-image.png"
  }
];

export function DigitalAds() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="ads" className="px-8 py-16 md:py-24 max-w-[1920px] mx-auto border-t border-white/5 mt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-[60ch]">
          <div className="flex items-center gap-2 text-primary mb-4 font-semibold tracking-widest uppercase text-xs">
            <Sparkles size={16} />
            <span>Digital Ads & Marketing</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold">Latest Campaigns</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Interactive digital experiences and immersive marketing players.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ads.map((ad, index) => (
          <motion.div
            key={ad.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(ad.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative overflow-hidden rounded-[2rem] bg-card/30 border border-white/5 hover:border-primary/40 transition-all duration-500"
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              {hoveredId === ad.id ? (
                <iframe 
                  src={ad.videoUrl} 
                  className="w-full h-full border-0 scale-150 origin-center"
                  allow="autoplay"
                />
              ) : (
                <>
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-xl shadow-primary/20">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {ad.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {ad.description}
              </p>
              <a
                href={ad.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest"
              >
                Launch Ad <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
