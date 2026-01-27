import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "About", href: "/article/about-james" },
    { name: "Splash Pages", href: "#splash" },
    { name: "Links", href: "#links" },
    { name: "Special Events", href: "#special-events" },
    { name: "Digital Ads", href: "#ads" },
    { name: "Documents", href: "#documents" },
    { name: "Capabilities", href: "#features" },
  ];

  return (
    <>
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden">
        <a href="https://digiucard.com" target="_blank" rel="noopener noreferrer" className="block">
          <img 
            src="https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1769545436803-digiucard_banner.gif"
            alt="DigiUCard Banner"
            className="w-full h-auto max-h-20 object-contain mx-auto"
          />
        </a>
      </div>
      
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 py-3" : "bg-transparent py-6"
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <Link href="/">
          <a className="font-display text-2xl font-bold tracking-tighter flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white group-hover:rotate-12 transition-transform">D</span>
            <span className="text-slate-900">Digi<span className="text-blue-600">U</span>Card</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 group">
            Get Started
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2">
                Get Started
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
