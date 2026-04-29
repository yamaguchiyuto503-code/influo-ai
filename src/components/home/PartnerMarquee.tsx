import { motion } from "framer-motion";

const partners = [
  { name: "Global Brand", width: "w-40" },
  { name: "Tech Giant", width: "w-48" },
  { name: "Luxury Group", width: "w-44" },
  { name: "FMCG Leader", width: "w-56" },
  { name: "Auto Maker", width: "w-40" },
  { name: "Media Corp", width: "w-44" }
];

const marqueeItems = [...partners, ...partners, ...partners];

export default function PartnerMarquee() {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative z-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-white/70 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-white/70 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-20">
         <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
           深受全球 500 强营销团队信赖
         </p>
      </div>

      <div className="flex overflow-hidden relative">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex gap-12 md:gap-20 items-center min-w-max px-8"
        >
          {marqueeItems.map((partner, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer ${partner.width}`}
            >
              <div className="h-16 w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-xl relative overflow-hidden flex items-center justify-center shadow-sm">
                 <span className="text-gray-400 font-extrabold tracking-wider text-xl uppercase">{partner.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
