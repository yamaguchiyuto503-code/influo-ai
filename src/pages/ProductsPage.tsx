import Navbar from "@/components/layout/Navbar";
import { ArrowRight, Lock, Activity, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

const MainLogoIcon = (props: any) => (
  <img src="/logo.svg" alt="Influo AI Logo" {...props} className={(props.className || "") + " object-contain"} />
);

const products = [
  {
    id: "influo-ai",
    title: "Influo.AI",
    subtitle: "你的专属AI品牌营销团队",
    description: "让 AI 记住你的品牌，然后创造属于你的一切内容。它不仅是一个内容生成工具，而是深度融合品牌认知与智能创作的营销核心大脑。",
    href: "https://app.influo-ai.com/",
    buttonText: "立即体验",
    isActive: true,
    visualIcon: Activity,
    imageSrc: "/logo.svg",
    visualBg: "bg-gradient-to-tr from-[#FF5E44]/10 to-orange-50",
    visualBorder: "border-orange-200/50",
    iconColor: "text-[#FF5E44]",
    reverse: false,
    placeholderText: "Influo.AI 控制台 / DNA 面板图占位"
  },
  {
    id: "streamhound",
    title: "StreamHound",
    subtitle: "广电监播合规监测系统",
    description: "Streamhound 是您视频流的专属「猎犬」，精准嗅探违规广告，捍卫您的转播纯洁性。从今天的合规守护者到明天的流量优化师，我们让每一帧画面都发挥最大价值。",
    href: "/try-streamhound",
    buttonText: "立即体验",
    isActive: true,
    visualIcon: Lock,
    visualBg: "bg-gradient-to-tr from-slate-100 to-gray-200",
    visualBorder: "border-gray-300/50",
    iconColor: "text-slate-600",
    reverse: true,
    placeholderText: "合规监测雷达 / 视频流监控仪表盘占位",
    imageSrc: "/streamhound-logo.png?v=2"
  },
  {
    id: "influo-claw",
    title: "Influo Claw",
    subtitle: "更懂你的品牌的 OpenClaw",
    description: "让爆火的开源智能体成为你的品牌专属智能员工。底层植入品牌 DNA 与语气设定，保留强大推理工具流的同时，为您提供最安全的极简交互皮囊。",
    href: "#",
    buttonText: "开发中，敬请期待",
    isActive: false,
    visualIcon: Bot,
    visualBg: "bg-gradient-to-tr from-[#05D0D0]/10 to-cyan-50",
    visualBorder: "border-cyan-200/50",
    iconColor: "text-[#05D0D0]",
    reverse: false,
    placeholderText: "开发中，敬请期待",
    imageSrc: "/influo-claw.png?v=2"
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-transparent relative">
      <Navbar />

      {/* Page Header */}
      <section className="pt-24 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-6"
          >
            全矩阵营销生态
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            从品牌内容大脑、广播流合规到开源生态前沿探索，满足企业多维度的智能提效诉求。
          </motion.p>
        </div>
      </section>

      {/* Product Rows */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${product.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Content */}
              <div className="flex-1 w-full text-left space-y-6">
                <div className={`inline-flex items-center justify-center rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 mb-2 shadow-sm overflow-hidden ${(product as any).imageSrc ? 'w-16 h-16 p-0.5' : 'p-4'}`}>
                  {(product as any).imageSrc ? (
                    <img src={(product as any).imageSrc} alt={product.title} className="w-full h-full object-contain scale-[1.15]" />
                  ) : (
                    <product.visualIcon className={`w-8 h-8 ${product.iconColor}`} />
                  )}
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    {product.id === "influo-ai" ? (
                      <span className="font-['Outfit'] font-black tracking-tight lowercase">
                        influo <span className="text-[#FF5E44]">ai</span>
                      </span>
                    ) : (
                      product.title
                    )}
                  </h2>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-400 mb-8">
                    {product.subtitle}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>

                <div className="pt-8">
                  {product.isActive ? (
                    <Link
                      to={product.href}
                      className="group inline-flex items-center gap-2 bg-[#FF5E44] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#e04c35] transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1"
                    >
                      {product.buttonText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <button disabled className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md text-gray-500 border border-white/60 px-8 py-4 rounded-full text-lg font-bold cursor-not-allowed">
                      {product.buttonText}
                    </button>
                  )}
                </div>
              </div>

              {/* Visual Component */}
              <div className="flex-1 w-full relative">
                {product.id === "influo-ai" ? (
                  <motion.div
                    className="w-full flex items-center justify-center p-4 md:p-8"
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                  >
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#05D0D0]/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5E44]/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                    <img
                      src="/influo-product.png?v=3"
                      alt={product.title}
                      className="w-full h-auto max-w-[400px] md:max-w-[700px] object-contain drop-shadow-[0_20px_40px_rgba(255,94,68,0.15)]"
                    />
                  </motion.div>
                ) : product.id === "streamhound" ? (
                  <motion.div
                    className="w-full flex items-center justify-center p-4 md:p-8"
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                    <div className="relative w-full max-w-[400px] md:max-w-[750px] rounded-[2.75rem] border border-white/70 bg-white/45 p-3 backdrop-blur-xl shadow-[0_24px_70px_rgba(148,163,184,0.22)]">
                      <div className="absolute inset-x-8 top-4 h-16 rounded-full bg-white/55 blur-2xl pointer-events-none"></div>
                      <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-white/90 via-sky-50/80 to-cyan-50/70 ring-1 ring-slate-200/60">
                        <img
                          src="/streamhound-product.png?v=2"
                          alt={product.title}
                          className="w-full h-auto object-cover rounded-[2rem] shadow-[0_18px_42px_rgba(59,130,246,0.12)]"
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : product.id === "influo-claw" ? (
                  <motion.div
                    className="w-full flex items-center justify-center p-4 md:p-8"
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#05D0D0]/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                    <img
                      src="/influo-claw.png?v=2"
                      alt={product.title}
                      className="w-full h-auto max-w-[400px] md:max-w-[700px] object-contain drop-shadow-[0_20px_40px_rgba(5,208,208,0.15)]"
                    />
                  </motion.div>
                ) : (
                  <div className={`w-full aspect-[4/3] rounded-[2.5rem] border ${product.visualBorder} bg-white/30 backdrop-blur-3xl flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-gray-200/50 transition-transform duration-700 hover:-translate-y-2`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent"></div>
                    <div className="relative z-10 p-8 bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-lg transform group-hover:scale-105 transition-transform duration-500 ease-out text-center">
                      <product.visualIcon className={`w-16 h-16 mx-auto mb-6 ${product.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                      <span className="text-gray-600 font-bold tracking-wider text-sm md:text-base px-4">
                        [ {product.placeholderText} ]
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
