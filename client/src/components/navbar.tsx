import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1920px] mx-auto px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="font-sans text-2xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
          SuccessStory<span className="text-primary">Vybe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/article/about-james" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
            About the Author
          </Link>
          <a href="#contact" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
            Get in touch
          </a>
          <a href="#newsletter" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
            Newsletter
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[300px] bg-background border-l border-border z-50 p-8 flex flex-col gap-8 md:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center">
                <span className="font-display text-xl font-bold">Menu</span>
                <button onClick={closeMenu} className="p-2 hover:text-primary transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="/" onClick={closeMenu} className="text-2xl font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/article/about-james" onClick={closeMenu} className="text-2xl font-medium hover:text-primary transition-colors">
                  About the Author
                </Link>
                <a href="#contact" onClick={closeMenu} className="text-2xl font-medium hover:text-primary transition-colors">
                  Get in touch
                </a>
                <a href="#newsletter" onClick={closeMenu} className="text-2xl font-medium hover:text-primary transition-colors">
                  Newsletter
                </a>
              </nav>

              <div className="mt-auto pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  © 2026 SuccessStory Vybe
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
