"use client";

import Navbar from "@/components/layout/Navbar";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <section className="flex-1 py-32 relative overflow-hidden flex items-center justify-center">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF5E44]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#05D0D0]/5 to-transparent rounded-full blur-3xl pointer-events-none translate-y-1/4"></div>
        
        <div className="max-w-4xl mx-auto px-4 w-full relative z-10 flex flex-col items-center text-center bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden p-10 lg:p-16">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">随时连线大脑</h1>
            <p className="text-gray-500 font-medium text-lg">无论是定制专属的品牌大脑，还是探讨开源生态的无限可能，我们随时准备为您效劳。</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center justify-center"
          >
            {/* QR Code Block */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-56 h-56 bg-white border-2 border-dashed border-gray-200 rounded-[2rem] flex flex-col items-center justify-center mb-6 shadow-sm group hover:border-[#05D0D0] hover:shadow-xl transition-all duration-500 relative overflow-hidden cursor-pointer hover:-translate-y-1">
                 <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-gray-200 group-hover:border-[#05D0D0] transition-colors rounded-tl-xl"></div>
                 <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-gray-200 group-hover:border-[#05D0D0] transition-colors rounded-tr-xl"></div>
                 <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-gray-200 group-hover:border-[#05D0D0] transition-colors rounded-bl-xl"></div>
                 <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-gray-200 group-hover:border-[#05D0D0] transition-colors rounded-br-xl"></div>
                 
                 <div className="w-12 h-12 bg-[#05D0D0]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                   <div className="flex gap-1">
                     <div className="w-2.5 h-2.5 bg-[#05D0D0] rounded-full"></div>
                     <div className="w-2 h-2 bg-[#05D0D0] rounded-full mt-1"></div>
                   </div>
                 </div>
                 <span className="text-gray-400 font-bold tracking-widest text-xs uppercase group-hover:text-gray-700 transition-colors">扫码添加企业微信</span>
                 <span className="text-gray-300 font-medium text-xs mt-1">[真实绿皮二维码]</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">专属方案对接</h3>
              <p className="text-gray-500 font-medium text-center text-sm max-w-[260px] mb-8">添加企业微信免费获取最新<br/>AI品牌战略资产白皮书</p>

              {/* Email Text Line */}
              <div className="flex flex-col items-center gap-2 mt-4">
                 <div className="w-12 h-px bg-gray-200 mb-4"></div>
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">或发送商务邮件至</span>
                 <a href="mailto:business@influo.ai" className="inline-flex items-center gap-2 text-lg font-bold text-gray-800 hover:text-[#05D0D0] transition-colors">
                   <Mail className="w-5 h-5" />
                   business@influo.ai
                 </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center text-gray-400 text-sm">
        <p className="font-bold text-gray-900 text-lg tracking-tighter flex items-center justify-center gap-1 mb-2">
            influo<span className="text-[#FF5E44]">ai</span>
        </p>
        <p>© 2026 Influo AI Co., Ltd. 专属AI品牌营销团队.</p>
      </footer>
    </main>
  );
}
