import { Link } from "wouter";
import { motion } from "framer-motion";
import { type Article } from "@shared/schema";
import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (article.url) {
      return (
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
          {children}
        </a>
      );
    }
    return <Link href={`/article/${article.slug}`} className="block">{children}</Link>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <CardWrapper>
        <div className="space-y-6">
          <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] shadow-sm">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-between items-start px-2">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{article.publishDate}</p>
            </div>
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:border-blue-600 text-slate-400 group-hover:text-white">
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
