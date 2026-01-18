import { motion } from "framer-motion";

const backgroundImages = [
  "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768776731602-DigiUCard_Splash_Image_01.jpg",
  "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768776730715-DigiUCard_Splash_Image_02.jpg",
  "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768776729702-DigiUCard_Splash_Image_03.jpg",
  "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768776733118-DigiUCard-favicon.jpeg"
];

export function WavyBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Background Image Layers */}
      <div className="absolute inset-0 bg-[#f8fafc]" />
      
      {backgroundImages.map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: index * 0.5 }}
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply grayscale opacity-10"
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Animated glow blobs with lighter, softer colors */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/40 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -150, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-purple-200/30 blur-[150px]"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.2]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
      
      {/* Soft noise texture */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
