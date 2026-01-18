import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WavyBackground } from "@/components/wavy-background";
import { ArticleCard } from "@/components/article-card";
import { EventSection } from "@/components/event-section";
import { CardShowcase } from "@/components/card-showcase";
import { LinkInBio } from "@/components/link-in-bio";
import { SpecialEvents } from "@/components/special-events";
import { DigitalAds } from "@/components/digital-ads";
import { DocumentsSection } from "@/components/documents-section";
import { FeaturesGrid } from "@/components/features-grid";
import { articles, showcasedCards } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden">
      <WavyBackground />
      
      <Navbar />

      <main className="relative z-10">
        <section className="px-8 pt-24 pb-12 md:pt-40 md:pb-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>The Future of Digital Identity</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
            >
              Digi<span className="text-blue-500">U</span>Card
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-[60ch] mx-auto"
            >
              Share your identity, content, and connections instantly through a single, powerful digital card. Your portfolio, your work, your passions — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl shadow-white/10">
                Get Started for Free
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
                View Documentation
              </button>
            </motion.div>
          </div>
          
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full -z-10 opacity-50" />
            <CardShowcase cards={showcasedCards} />
          </div>
        </section>

        <section id="splash" className="px-8 py-24 md:py-32 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Splash Pages</h2>
              <p className="text-white/60 text-lg">Beautifully crafted entry points for your digital presence.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </section>

        <LinkInBio />

        <SpecialEvents />

        <DigitalAds />

        <DocumentsSection />

        <FeaturesGrid />
      </main>

      <Footer />
    </div>
  );
}
