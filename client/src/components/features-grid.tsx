import { motion } from "framer-motion";
import { 
  Phone, 
  CheckSquare, 
  Mail, 
  Shield, 
  Calendar, 
  DollarSign, 
  PenTool, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Share2,
  ArrowRight
} from "lucide-react";

const features = [
  {
    title: "Click to Call",
    description: "Connect instantly with a single tap. No more manual dialing.",
    icon: Phone,
    color: "blue",
    url: "tel:+1234567890"
  },
  {
    title: "Share To-do's",
    description: "Collaborative reminders and task lists shared seamlessly.",
    icon: CheckSquare,
    color: "purple",
    url: "#"
  },
  {
    title: "Send Email",
    description: "Professional outreach automated through your digital identity.",
    icon: Mail,
    color: "blue",
    url: "mailto:contact@digiucard.com"
  },
  {
    title: "Secure Documents",
    description: "End-to-end encrypted media and document exchange.",
    icon: Shield,
    color: "indigo",
    url: "#"
  },
  {
    title: "Schedule & RSVP",
    description: "Integrated calendar for seamless booking and event management.",
    icon: Calendar,
    color: "purple",
    url: "#"
  },
  {
    title: "Pay & Request",
    description: "Secure payment processing and money requests in seconds.",
    icon: DollarSign,
    color: "emerald",
    url: "#"
  },
  {
    title: "Signable Forms",
    description: "Legally binding digital signatures and custom form creation.",
    icon: PenTool,
    color: "blue",
    url: "#"
  },
  {
    title: "Live Location",
    description: "Real-time location sharing for meetings and logistics.",
    icon: MapPin,
    color: "rose",
    url: "#"
  },
  {
    title: "Resumes & Certs",
    description: "Verified credentials and professional resumes at your fingertips.",
    icon: GraduationCap,
    color: "amber",
    url: "#"
  },
  {
    title: "Portfolio Hub",
    description: "Showcase your best work with high-impact portfolio links.",
    icon: Briefcase,
    color: "blue",
    url: "#"
  },
  {
    title: "Social Bridge",
    description: "Unified link between all your social platforms and profiles.",
    icon: Share2,
    color: "pink",
    url: "#"
  }
];

export function FeaturesGrid() {
  return (
    <section id="features" className="px-8 py-24 md:py-32 max-w-[1400px] mx-auto border-t border-white/5">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Unlimited Possibilities</span>
        </motion.div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          All Things U Can Do with DigiU
        </h2>
        <p className="text-white/40 text-lg max-w-[60ch] mx-auto">
          From communication to commerce, DigiUCard powers every aspect of your professional digital life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.a
            key={index}
            href={feature.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col h-full"
          >
            <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300`}>
              <feature.icon className="w-6 h-6 text-white group-hover:text-white" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
              {feature.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow">
              {feature.description}
            </p>
            <div className="flex items-center gap-2 text-white/60 group-hover:text-blue-500 transition-colors text-xs font-bold uppercase tracking-widest">
              Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
