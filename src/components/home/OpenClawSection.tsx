import { motion } from "framer-motion";
import { Bot, Terminal, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function OpenClawSection() {
  return (
    <section className="py-24 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-1 px-8 md:px-12 py-16 md:py-24 rounded-[3rem] bg-slate-900 overflow-hidden relative border border-slate-800 shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#05D0D0]/20 to-transparent rounded-full blur-3xl mix-blend-screen pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5E44]/10 to-transparent rounded-full blur-3xl mix-blend-screen pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold tracking-wider text-white mb-8 backdrop-blur"
              >
                <Terminal className="w-4 h-4 text-[#05D0D0]" />
                开源生态联名探索
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
              >
                Influo Claw <br/>
                <span className="text-[#05D0D0] text-3xl md:text-4xl mt-3 block font-medium">更懂你的品牌的 OpenClaw</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg"
              >
                让爆火的开源智能体成为你的品牌专属智能员工。底层植入品牌 DNA 与语气设定，保留强大推理工具流的同时，与品牌深度对齐。我们不干涉内部复杂的 Agent Loop，只为你提供最安全的"极简交互皮囊"。
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6"
              >
                <div className="px-6 py-3 rounded-full bg-[#05D0D0]/10 text-[#05D0D0] border border-[#05D0D0]/20 font-medium whitespace-nowrap">
                  正在开发中，预计 5 月份上线
                </div>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors text-sm underline underline-offset-4 flex items-center gap-2">
                  探索更多产品
                </Link>
              </motion.div>
            </div>
            
            {/* Interface Mock Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group border-t-slate-600/50 cursor-pointer">
                <div className="absolute top-0 w-full h-12 bg-slate-800/80 border-b border-slate-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-xs text-slate-400 font-mono tracking-wider">influo-claw-agent</div>
                </div>
                <Bot className="w-16 h-16 text-slate-500 mb-6 mt-8 group-hover:scale-110 group-hover:text-[#05D0D0] transition-colors duration-500" />
                <div className="text-slate-400 text-sm font-medium tracking-widest flex items-center gap-2">
                  <Terminal className="w-4 h-4 opacity-50" />
                  [ 开发中，敬请期待 ]
                </div>
                
                {/* Security Badge */}
                <div className="absolute bottom-6 right-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-xs text-slate-400 backdrop-blur-md">
                  <ShieldAlert className="w-3.5 h-3.5 text-yellow-500" /> 沙盒安全白名单执行
                </div>
              </div>
              
              {/* Floating element 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-16 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="font-mono text-xs text-[#05D0D0] mb-2">SOUL.md Loaded</div>
                <div className="w-16 h-2 bg-[#05D0D0]/50 rounded-full mb-2"></div>
                <div className="w-10 h-2 bg-slate-500/50 rounded-full"></div>
              </motion.div>

              {/* Floating element 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-6 bottom-20 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF5E44]/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#FF5E44] animate-pulse"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
