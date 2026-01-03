import { Link } from "wouter";
import { motion } from "framer-motion";
import { Article } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/article/${article.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-muted mb-5 rounded-2xl cursor-pointer">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      
      <div className="flex items-center gap-3 mb-2">
        <time className="text-xs uppercase tracking-wider text-muted-foreground font-sans font-medium">
          {article.publishDate}
        </time>
      </div>
      
      <Link href={`/article/${article.slug}`}>
        <h3 className="font-display text-[1.375rem] md:text-[1.6875rem] font-semibold leading-tight tracking-tight mt-1 transition-colors duration-300 group-hover:text-primary cursor-pointer">
          {article.title}
        </h3>
      </Link>
    </motion.article>
  );
}
