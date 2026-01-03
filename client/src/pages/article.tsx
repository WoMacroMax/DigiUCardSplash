import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WavyBackground } from "@/components/wavy-background";
import { articles } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ArticlePage() {
  const [match, params] = useRoute("/article/:slug");
  const article = articles.find(a => a.slug === params?.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <WavyBackground />
      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Stories
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-12 text-center">
            <time className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4 block">
              {article.publishDate}
            </time>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              {article.title}
            </h1>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg md:prose-xl max-w-none mx-auto">
            <p className="lead text-2xl md:text-3xl text-muted-foreground mb-8 font-serif italic">
              Experience the essence of {article.title.toLowerCase()} in a world where design meets destination.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="font-display mt-12 mb-6 text-3xl">The Journey</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 text-2xl font-serif italic text-muted-foreground bg-muted/20 pr-4 rounded-r-lg">
              "Travel is not just about the destination, but the stories we gather along the way."
            </blockquote>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
}
