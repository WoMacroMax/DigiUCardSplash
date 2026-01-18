import { Link } from "wouter";
import { motion } from "framer-motion";
import { Article } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (article.url) {
      return (
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <Link href={`/article/${article.slug}`}>{children}</Link>;
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <CardWrapper>
        <div className="relative aspect-video overflow-hidden bg-muted mb-5 rounded-2xl cursor-pointer">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {article.url && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-medium px-4 py-2 border border-white/40 rounded-full backdrop-blur-md">View Splash Page</span>
            </div>
          )}
        </div>
      </CardWrapper>
      
      <div className="flex items-center gap-3 mb-2">
        <time className="text-xs uppercase tracking-wider text-muted-foreground font-sans font-medium">
          {article.publishDate}
        </time>
      </div>
      
      <CardWrapper>
        <h3 className="font-display text-[1.375rem] md:text-[1.6875rem] font-semibold leading-tight tracking-tight mt-1 transition-colors duration-300 group-hover:text-primary cursor-pointer">
          {article.title}
        </h3>
      </CardWrapper>
    </motion.article>
  );
}
