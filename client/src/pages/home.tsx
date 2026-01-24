import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WavyBackground } from "@/components/wavy-background";
import { ArticleCard } from "@/components/article-card";
import { CardShowcase } from "@/components/card-showcase";
import { LinkInBio } from "@/components/link-in-bio";
import { SpecialEvents } from "@/components/special-events";
import { DigitalAds } from "@/components/digital-ads";
import { DocumentsSection } from "@/components/documents-section";
import { FeaturesGrid } from "@/components/features-grid";
import { type Article, type Card } from "@shared/schema";

export default function Home() {
  const { data: articles, isLoading: loadingArticles } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const { data: cards, isLoading: loadingCards } = useQuery<Card[]>({
    queryKey: ["/api/cards"],
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative overflow-x-hidden">
      <WavyBackground />
      
      <Navbar />

      <main className="relative z-10">
        <section className="px-8 pt-24 pb-12 md:pt-40 md:pb-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 text-sm font-medium mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-slate-600">The Future of Digital Identity</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8 bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent"
            >
              Digi<span className="text-blue-600">U</span>Card
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-[60ch] mx-auto"
            >
              Share your identity, content, and connections instantly through a single, powerful digital card. Your portfolio, your work, your passions — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <Link href="/signup">
                <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl shadow-slate-900/10">
                  Get Started for Free
                </button>
              </Link>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-50 transition-all shadow-sm">
                View Documentation
              </button>
            </motion.div>
          </div>
          
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-blue-400/10 blur-[120px] rounded-full -z-10 opacity-50" />
            {loadingCards ? (
              <div className="h-64 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <CardShowcase cards={cards || []} />
            )}
          </div>
        </section>

        <section id="splash" className="px-8 py-24 md:py-32 max-w-[1400px] mx-auto border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-slate-900">Splash Pages</h2>
              <p className="text-slate-500 text-lg">Beautifully crafted entry points for your digital presence.</p>
            </div>
          </div>
          {loadingArticles ? (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {(articles || []).map((article, index) => (
                <ArticleCard key={article.slug} article={article} index={index} />
              ))}
            </div>
          )}
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
