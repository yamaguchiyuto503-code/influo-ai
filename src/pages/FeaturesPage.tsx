import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import FeatureCarousel from "@/components/features/FeatureCarousel";
import Footer from "@/components/layout/Footer";

const featureData = [
  {
    sectionTitle: "品牌 DNA",
    subtitle: "从理解品牌，到成为品牌的一部分",
    reverse: false,
    items: [
      {
        title: "智能生成品牌肖像",
        description: "上传品牌资料，AI自动构建品牌人格、语气与表达风格，形成统一对外「声音」。"
      },
      {
        title: "持续更新品牌记忆",
        description: "每一次交互，AI不断进化，让输出内容越来越贴合品牌风格。"
      },
      {
        title: "智能调用品牌知识库",
        description: "沉淀优质内容为品牌资产，AI基于经验持续优化输出策略。"
      }
    ]
  },
  {
    sectionTitle: "Campaign 策划",
    subtitle: "让AI帮你完成整套营销策划案，而不只是写内容",
    reverse: true,
    items: [
      {
        title: "Campaign Brief",
        description: "自动拆解目标，生成完整执行方案与任务路径，并规划各平台策略。"
      },
      {
        title: "Campaign Memory",
        description: "每个Campaign拥有独立记忆，保证策略和品牌风格始终一致。"
      },
      {
        title: "物料一键生成",
        description: "结合本次项目策略，多模态内容一键上线，智能调整适配各平台，实现高效投放。"
      }
    ]
  },
  {
    sectionTitle: "内容工厂",
    subtitle: "打造可持续进化的内容生产系统",
    reverse: false,
    items: [
      {
        title: "优秀案例沉淀",
        description: "每次优质内容都会被记录，形成专属品牌内容库。"
      },
      {
        title: "案例驱动生成",
        description: "历史爆款风格驱动内容生成，更稳定、更符合品牌调性，并适配各平台表现差异。"
      },
      {
        title: "多模态二次创作",
        description: "文案、图片、视频统一生成并实时优化，让创作更高效。"
      }
    ]
  },
  {
    sectionTitle: "AI 数据智解",
    subtitle: "洞察营销效果，驱动优化与迭代",
    reverse: true,
    items: [
      {
        title: "AI 智能分析",
        description: "AI识别内容表现背后的关键因素，让你知道哪些设计让效果更好或更差。"
      },
      {
        title: "AI 智能优化",
        description: "根据数据洞察提供可执行建议，让下一步内容和策略更精准。"
      },
      {
        title: "数据记忆升级",
        description: "用户认可的数据反馈自动反哺品牌记忆，形成正向闭环，不断提升输出质量。"
      }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-transparent relative">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-24 relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF5E44]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#05D0D0]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-bold tracking-widest text-[#05D0D0] uppercase mb-8 shadow-sm"
          >
            CORE CAPABILITIES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-tight"
          >
            一个系统，完成从品牌<br/>
            到内容、营销的<span className="text-[#FF5E44]">全部智能化</span>
          </motion.h1>
        </div>
      </section>

      {/* Features Carousels */}
      <div className="relative z-10">
        {featureData.map((data, idx) => (
          <FeatureCarousel
            key={idx}
            sectionTitle={data.sectionTitle}
            subtitle={data.subtitle}
            items={data.items}
            reverse={data.reverse}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
