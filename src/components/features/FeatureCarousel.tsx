import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureCarouselProps {
  sectionTitle: string;
  subtitle: string;
  items: FeatureItem[];
  reverse?: boolean;
}

export default function FeatureCarousel({ sectionTitle, subtitle, items, reverse = false }: FeatureCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-bold max-w-3xl">
            {subtitle}
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className="w-full lg:w-5/12 space-y-4">
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    isActive 
                      ? "bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.06)] scale-105 relative z-10" 
                      : "bg-transparent border-transparent hover:bg-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-bold transition-colors ${isActive ? "text-[#FF5E44]" : "text-gray-700"}`}>
                      {item.title}
                    </h3>
                    {isActive && (
                      <motion.div layoutId="chevron">
                        <ChevronRight className="w-5 h-5 text-[#FF5E44]" />
                      </motion.div>
                    )}
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-500 leading-relaxed font-medium pt-2">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-7/12">
            <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative overflow-hidden flex items-center justify-center p-4">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent z-0"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 w-full h-full bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center p-8 group"
                >
                  <div className="w-20 h-20 rounded-full bg-[#FF5E44]/10 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-10 h-10 rounded-full bg-[#FF5E44]/80 animate-pulse"></div>
                  </div>
                  
                  <span className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4">
                    [ 动态演示区域 ]
                  </span>
                  
                  <h4 className="text-2xl font-black text-gray-800 mb-2">
                    {items[activeIndex].title}
                  </h4>
                  <p className="text-gray-500 font-medium max-w-sm">
                    此区域用于放置该功能的专属展示图、后台界面录屏或动画视频。
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#05D0D0]/5 rounded-full blur-3xl -z-10 transition-all duration-700 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
