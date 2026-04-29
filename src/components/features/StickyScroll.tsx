import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, Sparkles, Target, BarChart } from "lucide-react";

const featuresData = [
  {
    topic: "品牌 DNA",
    title: "从理解品牌，到\n成为品牌的一部分",
    color: "from-[#FF5E44]/10 to-[#FF5E44]/5",
    accent: "#FF5E44",
    visual: "dna",
    details: [
      { subtitle: "智能生成品牌肖像", desc: "上传品牌资料，AI自动构建品牌人格、语气与表达风格，形成统一对外\"声音\"。" },
      { subtitle: "持续更新品牌记忆", desc: "每一次交互，AI不断进化，让输出内容越来越贴合品牌风格。" },
      { subtitle: "智能调用品牌知识库", desc: "沉淀优质内容为品牌资产，AI基于经验持续优化输出策略。" }
    ]
  },
  {
    topic: "Campaign 策划",
    title: "不仅是写内容\n更是整套营销策划",
    color: "from-purple-500/10 to-purple-500/5",
    accent: "#A855F7",
    visual: "campaign",
    details: [
      { subtitle: "Campaign Brief", desc: "自动拆解目标，生成完整执行方案与任务路径，并规划各平台策略。" },
      { subtitle: "Campaign Memory", desc: "每个Campaign拥有独立记忆，保证策略和品牌风格始终一致。" },
      { subtitle: "物料一键生成", desc: "结合本次项目策略，多模态内容一键上线，智能调整适配各平台，实现高效投放。" }
    ]
  },
  {
    topic: "内容工厂",
    title: "变幻莫测的创意\n可持续进化的产出",
    color: "from-[#05D0D0]/10 to-[#05D0D0]/5",
    accent: "#05D0D0",
    visual: "factory",
    details: [
      { subtitle: "优秀案例沉淀", desc: "每次优质内容都会被记录，形成专属品牌内容库。" },
      { subtitle: "案例驱动生成", desc: "历史爆款风格驱动内容生成，更稳定、更符合品牌调性，并适配各平台表现差异。" },
      { subtitle: "多模态二次创作", desc: "文案、图片、视频统一生成并实时优化，让创作更高效。" }
    ]
  },
  {
    topic: "AI 数据智解",
    title: "洞察营销每一滴效果\n驱动反哺闭环",
    color: "from-blue-500/10 to-blue-500/5",
    accent: "#3B82F6",
    visual: "data",
    details: [
      { subtitle: "AI 智能分析", desc: "AI识别内容表现背后的关键因素，让你知道哪些设计让效果更好或更差。" },
      { subtitle: "AI 智能优化", desc: "根据数据洞察提供可执行建议，让下一步内容和策略更精准。" },
      { subtitle: "数据记忆升级", desc: "用户认可的数据反馈自动反哺品牌记忆，形成正向闭环，不断提升输出质量。" }
    ]
  }
];

const VisualComponent = ({ type }: { type: string }) => {
  const getVisualConfig = () => {
    switch (type) {
      case "dna": return { title: "品牌 DNA", icon: Fingerprint, color: "text-[#FF5E44]" };
      case "factory": return { title: "内容工厂", icon: Sparkles, color: "text-[#05D0D0]" };
      case "campaign": return { title: "Campaign", icon: Target, color: "text-purple-500" };
      case "data": return { title: "AI 数据智解", icon: BarChart, color: "text-blue-500" };
      default: return { title: "演示区", icon: Sparkles, color: "text-gray-500" };
    }
  };
  
  const config = getVisualConfig();
  const Icon = config.icon;

  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12">
      <div className="w-full h-full max-h-[600px] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-[2.5rem] flex flex-col items-center justify-center group transition-transform duration-700 hover:scale-[1.02]">
        
        <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-8 group-hover:-translate-y-2 transition-transform duration-500">
          <Icon className={`w-10 h-10 md:w-12 md:h-12 ${config.color}`} />
        </div>
        
        <div className="flex items-center gap-4 text-gray-400 font-bold tracking-widest text-xs md:text-sm uppercase px-4">
          <span className="w-8 md:w-12 h-[2px] bg-gray-200"></span>
          [ {config.title}后台界面截图位 ]
          <span className="w-8 md:w-12 h-[2px] bg-gray-200"></span>
        </div>
        
        <p className="mt-6 text-gray-400 font-medium text-sm max-w-xs text-center leading-relaxed px-6 opacity-70">
          此处绝对干净留白，等待填入您的真实高清产品演示视频或图片。
        </p>
      </div>
    </div>
  );
};

export default function StickyScrollExp() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="bg-gray-50/50 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row relative">
        
        {/* Left Side: Sticky Visual Container */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 hidden md:flex items-center justify-center p-8 lg:p-16">
          <div className="w-full h-full bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden relative transition-all duration-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${featuresData[activeCard].color}`}
              >
                <VisualComponent type={featuresData[activeCard].visual} />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-10 right-10 text-[12rem] xl:text-[15rem] font-black leading-none text-gray-900/[0.03] select-none pointer-events-none">
              0{activeCard + 1}
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Content */}
        <div className="w-full md:w-1/2 pb-32">
          {featuresData.map((section, index) => (
            <motion.div 
              key={index}
              onViewportEnter={() => setActiveCard(index)}
              viewport={{ margin: "-50% 0px -50% 0px" }}
              className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-32 md:py-0 relative"
            >
              {/* Mobile visual block */}
              <div className="md:hidden w-full aspect-square bg-white rounded-3xl shadow-xl mb-12 relative overflow-hidden border border-gray-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color}`}>
                   <VisualComponent type={section.visual} />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 mb-8 uppercase tracking-widest font-black text-sm" style={{ color: section.accent }}>
                <span className="w-8 h-[2px]" style={{ backgroundColor: section.accent }}></span>
                {section.topic}
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-16 leading-[1.15] whitespace-pre-line tracking-tight">
                {section.title}
              </h2>

              <div className="space-y-12">
                {section.details.map((detail, dIdx) => (
                  <div key={dIdx} className="group cursor-default relative pl-8 border-l-2 border-gray-200 hover:border-transparent transition-colors duration-300">
                    <motion.div 
                      className="absolute top-0 left-[-2px] bottom-0 w-[2px] opacity-0 group-hover:opacity-100 origin-top"
                      style={{ backgroundColor: section.accent }}
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                      {detail.subtitle}
                    </h3>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors">
                      {detail.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
