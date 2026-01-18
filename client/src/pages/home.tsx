import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WavyBackground } from "@/components/wavy-background";
import { ArticleCard } from "@/components/article-card";
import { EventSection } from "@/components/event-section";
import { articles, events } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <WavyBackground />
      
      <Navbar />

      <main className="relative z-10">
        <section className="text-center px-8 py-16 md:py-32 max-w-[1920px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-semibold text-[clamp(2.5rem,8vw+0.625rem,12.5rem)] md:text-[clamp(5rem,10vw+1.25rem,15rem)] lg:text-[clamp(6.25rem,12vw+1.875rem,18.75rem)] leading-[0.9] tracking-tighter mb-12"
          >
            <span className="block">Digi<span className="text-blue-500">U</span>Card</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-muted-foreground text-lg md:text-2xl leading-relaxed max-w-[60ch] mx-auto"
          >
            DigiUCard by WoMacroMax Publishing delivers the digital version of you — your portfolio, your work, your passions, and everything you care about. Share your identity, content, and connections instantly through a single, powerful digital card.
          </motion.p>
        </section>

        <section className="px-8 py-8 md:py-16 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[70px] lg:gap-24">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </section>

        <EventSection events={events} />
      </main>

      <Footer />
    </div>
  );
}
