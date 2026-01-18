import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="px-8 py-24 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-8">
          <Link href="/">
            <a className="font-display text-3xl font-bold tracking-tighter flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">D</span>
              <span className="text-slate-900">Digi<span className="text-blue-600">U</span>Card</span>
            </a>
          </Link>
          <p className="text-slate-500 text-lg max-w-sm">
            Revolutionizing digital identity through modular, shareable content hubs. Your world, in one card.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Product</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Splash Pages</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Digital Ads</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Support</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm italic">
          &copy; 2026 WoMacroMax Publishing. All rights reserved.
        </p>
        <div className="flex gap-8 text-slate-400 text-sm">
          <a href="#" className="hover:text-blue-600">Twitter</a>
          <a href="#" className="hover:text-blue-600">LinkedIn</a>
          <a href="#" className="hover:text-blue-600">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
