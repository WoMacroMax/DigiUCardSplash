import { motion } from "framer-motion";
import { Instagram, Link2, ExternalLink } from "lucide-react";

const links = [
  { title: "My Portfolio", url: "https://digiucard.com/RodPage" },
  { title: "Connect with Me", url: "https://digiucard.info/digiucard?primarychecksum=0000418de2aa" },
  { title: "Latest Project", url: "https://snug-build-box.lovable.app" },
  { title: "Newsletter Signup", url: "#newsletter" },
  { title: "Book a Consultation", url: "#contact" },
];

export function LinkInBio() {
  return (
    <section id="links" className="px-8 py-16 md:py-24 max-w-[1920px] mx-auto border-t border-white/5 mt-16">
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
          <Instagram size={32} className="text-white" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center">Links In Bio</h2>
        <p className="text-muted-foreground text-center mt-4 max-w-[50ch]">
          The perfect companion for your social media presence. One link to rule them all.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-[#121212] border border-white/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative Phone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
          
          <div className="relative z-0 mt-8">
            <div className="flex flex-col items-center mb-8">
              <div className="w-24 h-24 rounded-full border-2 border-primary p-1 mb-4">
                <div className="w-full h-full rounded-full bg-muted overflow-hidden">
                  <img 
                    src="https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768860091-image.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-bold text-xl">@DigiUCard</h3>
              <p className="text-muted-foreground text-sm">Digital Identity Architect</p>
            </div>

            <div className="space-y-4">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all group"
                >
                  <span className="font-medium">{link.title}</span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            <div className="mt-12 flex justify-center gap-6 text-muted-foreground">
              <Instagram size={20} className="hover:text-primary cursor-pointer" />
              <Link2 size={20} className="hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
