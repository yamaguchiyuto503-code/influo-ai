import { motion } from "framer-motion";
import { CopyIcon, Layers, Network, BarChart3, Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "品牌 DNA",
    description: "融合品牌认知与持续学习机制，构建稳定且可进化的品牌表达体系",
    icon: Fingerprint,
    linkText: "查看品牌DNA →",
    href: "/features#dna",
    className: "col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-white to-gray-50",
    iconColor: "text-[#FF5E44]",
    delay: 0.1,
  },
  {
    title: "Campaign",
    description: "贯穿策略拆解与执行管理，构建可协同、可追踪的营销运行体系",
    icon: Network,
    linkText: "了解Campaign →",
    href: "/features#campaign",
    className: "col-span-1 bg-white",
    iconColor: "text-[#FF5E44]",
    delay: 0.2,
  },
  {
    title: "内容工厂",
    description: "融合品牌认知与受众洞察，驱动跨平台内容的智能生成与优化",
    icon: Layers,
    linkText: "探索内容工厂 →",
    href: "/features#content-factory",
    className: "col-span-1 bg-white",
    iconColor: "text-[#05D0D0]",
    delay: 0.3,
  },
  {
    title: "数据智解",
    description: "融合多维数据分析与归因能力，驱动更精准的优化与决策迭代",
    icon: BarChart3,
    linkText: "解读数据洞察 →",
    href: "/features#data",
    className: "col-span-1 md:col-span-2 bg-slate-900 text-white",
    iconColor: "text-[#05D0D0]",
    isDark: true,
    delay: 0.4,
  },
  {
    title: "一键分发",
    description: "连接主流社媒平台，实现内容一键分发与统一运营管理",
    icon: CopyIcon,
    linkText: "Coming Soon",
    href: "#",
    className: "col-span-1 bg-gray-50 opacity-60 cursor-not-allowed",
    iconColor: "text-gray-400",
    isComingSoon: true,
    delay: 0.5,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 pb-40 relative z-10" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight relative z-10"
          >
            一个大脑，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E44] to-[#05D0D0]">五项专属进化能力</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto relative z-10"
          >
            告别碎片化的工具调用。以品牌 DNA 为核心，全栈打通从认知、创作到分发、反馈的智能营销增长飞轮。
          </motion.p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-gradient-to-r from-[#FF5E44]/10 to-[#05D0D0]/10 blur-3xl pointer-events-none"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5, ease: "easeOut" }}
              className={`group relative rounded-3xl border ${item.isDark ? 'border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.2)]' : 'border-gray-200 shadow-sm'} p-10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${item.className}`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.isDark ? 'bg-slate-800' : 'bg-gray-100/80 group-hover:bg-white'} backdrop-blur-sm transition-colors shadow-sm`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${item.isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-base leading-relaxed ${item.isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {item.description}
                </p>
              </div>
              
              <div className="relative z-10 mt-8 font-medium">
                {item.isComingSoon ? (
                  <span className="inline-flex items-center text-sm text-gray-400 px-4 py-1.5 rounded-full bg-gray-100">
                    {item.linkText}
                  </span>
                ) : (
                  <Link 
                    to={item.href} 
                    className={`inline-flex items-center text-sm font-semibold transition-colors ${item.isDark ? 'text-[#05D0D0] hover:text-white' : 'text-[#FF5E44] hover:text-gray-900'}`}
                  >
                    {item.linkText}
                  </Link>
                )}
              </div>
              
              {!item.isDark && !item.isComingSoon && (
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-[#FF5E44]/5 to-[#05D0D0]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
