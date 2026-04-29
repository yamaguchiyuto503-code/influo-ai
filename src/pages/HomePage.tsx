import Navbar from "@/components/layout/Navbar";
import PartnerMarquee from "@/components/home/PartnerMarquee";
import FeaturesSection from "@/components/home/FeaturesSection";
import OpenClawSection from "@/components/home/OpenClawSection";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/layout/Footer";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden selection:bg-[#FF5E44]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold tracking-wide text-gray-600 mb-10 shadow-sm transition-transform hover:scale-105"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#05D0D0] animate-pulse shadow-[0_0_10px_#05D0D0]"></span>
            <span className="font-['Outfit'] font-black tracking-tight lowercase">influo ai</span> v0.1 已上线
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-gray-900 mb-8 pb-2 leading-[1.1]"
          >
            专属于你的<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E44] to-[#05D0D0]">AI品牌市场营销团队</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            不只是生成，而是学习、理解、进化。<br className="hidden md:block" />
            让AI重塑品牌与IP的生命力、影响力和商业力。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              to="https://app.influo-ai.com/"
              className="group flex flex-1 sm:flex-none items-center justify-center gap-2 bg-[#FF5E44] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#e04c35] transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1 hover:shadow-orange-500/40"
            >
              开始试用 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="#features"
              className="group flex flex-1 sm:flex-none items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-[#05D0D0] transition-colors" />
              了解更多功能
            </Link>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-28 mx-auto max-w-5xl rounded-[2rem] border border-gray-200/60 bg-white/50 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-2 md:p-3 relative group cursor-pointer transition-all hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] duration-700 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden aspect-video rounded-[1.5rem] bg-gray-50 flex flex-col items-center justify-center w-full h-full">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-200 opacity-60"></div>
              
              <div className="relative z-10 w-24 h-24 bg-white/95 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-500 ease-out">
                <PlayCircle className="w-12 h-12 text-[#FF5E44] translate-x-0.5" />
              </div>
              <div className="relative z-10 mt-8 text-gray-400 font-semibold tracking-wider flex items-center gap-4 text-sm uppercase">
                <span className="w-16 h-[1px] bg-gray-300"></span>
                主视觉演示视频占位模块
                <span className="w-16 h-[1px] bg-gray-300"></span>
              </div>
            </div>
            {/* Subtle glow behind the player */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#FF5E44]/10 rounded-full blur-3xl -z-20 group-hover:bg-[#FF5E44]/20 transition-colors duration-700 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[20rem] h-[20rem] bg-[#05D0D0]/10 rounded-full blur-3xl -z-20 group-hover:bg-[#05D0D0]/20 transition-colors duration-700 pointer-events-none"></div>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.015] -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbHQ9InVybCgjbikiIG9wYWNpdHk9IjAuNiIvPjwvc3ZnPg==')] pointer-events-none"></div>
      </section>

      <PartnerMarquee />
      <FeaturesSection />
      <OpenClawSection />
      <CtaSection />

      <Footer />
    </main>
  );
}
