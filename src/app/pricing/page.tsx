"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Check, X, ArrowRight, Server, BookOpen, Briefcase, Zap } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const memberTiers = [
  { name: "[ 会员基础版 ]", price: "¥ XX", period: "/ 月", desc: "[ 适合个人创作者的基础品牌功能尝试 ]", popular: false },
  { name: "[ 会员进阶版 ]", price: "¥ XX", period: "/ 月", desc: "[ 适合自由职业者与小型工作室的高级内容生产 ]", popular: true },
  { name: "[ 会员尊享版 ]", price: "¥ XX", period: "/ 月", desc: "[ 适合重度内容创作者，拥有完整品牌资产权限 ]", popular: false }
];

const enterpriseTiers = [
  { name: "[ 企业团队版 ]", price: "¥ XXX", period: "/ 年 / 人", desc: "[ 适合中小团队的品牌协同与内容分发 ]", popular: false },
  { name: "[ 企业品牌版 ]", price: "¥ XXX", period: "/ 年 / 人", desc: "[ 适合大中型企业的超级品牌大脑核心搭建 ]", popular: true },
  { name: "[ 企业集团版 ]", price: "定制", period: "", desc: "[ 适合超大集团的多品牌矩阵与跨部门精细权限管理 ]", popular: false }
];

const tableRows = [
  "品牌 DNA 库数量上限", "无缝多模态内容生成", "Campaign 节点自动规划", "AI 数据智解与反哺报告", "一键分发至全媒体平台"
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"member" | "enterprise">("member");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-20 bg-gray-50 border-b border-gray-100 relative overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF5E44]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#05D0D0]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
            投资你的专属 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E44] to-[#05D0D0]">品牌营销团队</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium mb-12">
            我们为您准备了极具扩展性的订阅计划，满足从个人创作者到超大型集团的差异化业务诉求。
          </p>

          {/* Toggle */}
          <div className="bg-gray-200/50 p-1.5 rounded-full inline-flex relative shadow-inner">
            <button 
              onClick={() => setBillingCycle("member")}
              className={`relative z-10 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${billingCycle === "member" ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
            >
              会员订阅（个人）
            </button>
            <button 
              onClick={() => setBillingCycle("enterprise")}
              className={`relative z-10 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${billingCycle === "enterprise" ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
            >
              企业订阅（团队）
            </button>
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gray-900 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${billingCycle === "member" ? "left-1.5" : "left-[calc(50%+4.5px)]"}`}
            ></div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 relative z-20 -mt-16">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {(billingCycle === "member" ? memberTiers : enterpriseTiers).map((tier, idx) => (
              <motion.div 
                key={tier.name + billingCycle}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative bg-white rounded-[2rem] p-8 lg:p-10 border ${tier.popular ? "border-[#FF5E44] shadow-[0_30px_60px_rgba(255,94,68,0.15)] md:-mt-8 ring-4 ring-[#FF5E44]/10" : "border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"} flex flex-col group`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF5E44] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-xl">
                    最受欢迎的配置
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm font-medium mb-8 min-h-[40px]">{tier.desc}</p>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-gray-900">{tier.price}</span>
                  <span className="text-gray-400 font-bold">{tier.period}</span>
                </div>
                
                <ul className="space-y-5 mb-10 flex-1">
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-[#05D0D0]/10 p-0.5 rounded-full text-[#05D0D0] flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-gray-600 text-sm font-medium leading-tight">[ {billingCycle === "member" ? "个人版" : "企业版"}专属特权文案占位 {item} ]</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${tier.popular ? "bg-[#FF5E44] text-white hover:bg-[#e04c35] hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1" : "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:-translate-y-1"}`}>
                  [ 立即订阅 / 申请试用 ]
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-32 bg-white border-t border-gray-100/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">各类别功能详细对比表</h2>
            <p className="text-gray-500 mt-4 text-lg">透明的权益区分，帮助您锁定最适合的品牌武器。</p>
          </motion.div>
          
          <div className="overflow-x-auto pb-8">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="py-6 px-4 font-bold text-gray-900 text-lg w-1/4">核心功能模块</th>
                  <th className="py-6 px-4 font-bold text-gray-500 text-center w-1/4">[ 基础套餐名 ]</th>
                  <th className="py-6 px-4 font-bold text-[#FF5E44] text-center w-1/4">[ 进阶套餐名 ]</th>
                  <th className="py-6 px-4 font-bold text-gray-900 text-center w-1/4">[ 顶配套餐名 ]</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((feature, idx) => (
                  <motion.tr 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors group cursor-default"
                  >
                    <td className="py-6 px-4 font-bold text-gray-700 group-hover:text-[#FF5E44] transition-colors">{feature}</td>
                    <td className="py-6 px-4 text-center text-gray-400">
                      {idx > 2 ? <X className="w-5 h-5 mx-auto opacity-40" /> : <span className="font-mono text-sm">[ 基础配置 ]</span>}
                    </td>
                    <td className="py-6 px-4 text-center bg-[#FF5E44]/[0.02]">
                      <Check className="w-6 h-6 mx-auto text-[#FF5E44]" />
                    </td>
                    <td className="py-6 px-4 text-center font-bold text-gray-900">
                      {idx === 0 ? "无限量" : <Check className="w-6 h-6 mx-auto text-gray-900" />}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#05D0D0]/5 rounded-full blur-3xl -translate-y-1/2 -z-10 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black text-gray-900 tracking-tight mb-16 text-center md:text-left"
            >
              平台增值服务 (Add-ons)
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-10 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
               <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
                 <div className="w-24 h-24 bg-gradient-to-br from-[#05D0D0]/20 to-[#05D0D0]/5 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
                   <Zap className="w-10 h-10 text-[#05D0D0]" />
                 </div>
                 <div>
                   <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">开发者 API 调用包</h3>
                   <p className="text-gray-500 font-medium max-w-2xl leading-relaxed text-lg">
                     [ 增值文案占位：将 Influo AI 的核心引擎直接对接到您的内部 ERP / 企微机器人等商业生态系统中。 ]
                   </p>
                 </div>
               </div>
               <div>
                 <button className="px-8 py-4 border-2 border-gray-200 text-gray-900 font-bold rounded-full hover:border-[#05D0D0] hover:text-[#05D0D0] transition-colors whitespace-nowrap text-lg">
                   [ 获取定制 API 报价 ]
                 </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Enterprise Customization */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6"
            >
              企业级深度定制服务
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 max-w-3xl mx-auto font-medium"
            >
              针对需要极高数据安全边界、深水区复杂业务改造的旗舰级跨国商业巨头。
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Briefcase, title: "行业方案包", desc: "[ 占位文案：为您量身定制符合特定行业规则（例如医疗、汽车）的大模型系统边界指令与不可逾越的政策知识库。 ]", bg: "bg-gray-50", text: "text-gray-900", iconColor: "text-gray-900" },
              { icon: BookOpen, title: "企业内部大脑搭建", desc: "[ 占位文案：首席方案专家驻场协助您梳理公司历史十年的全部数字物料，一次性全部完成强关联的向量化 RAG 切片处理。 ]", bg: "bg-gray-50", text: "text-gray-900", iconColor: "text-gray-900" },
              { icon: Server, title: "完全私有化部署", desc: "[ 占位文案：将整个营销 AI 框架与专用微调大模型完美闭环部署在您的专属内网集群中，彻底切断物理外网连接，根除数据出库风险。 ]", bg: "bg-gray-900", text: "text-white", iconColor: "text-white" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className={`p-12 ${item.bg} rounded-[2.5rem] border ${item.bg === "bg-gray-900" ? "border-gray-800 shadow-[0_30px_60px_rgba(0,0,0,0.15)]" : "border-gray-100 hover:shadow-xl"} hover:-translate-y-2 transition-all duration-500`}
              >
                <item.icon className={`w-12 h-12 ${item.iconColor} mb-8`} />
                <h3 className={`text-3xl font-black ${item.text} mb-6 tracking-tight`}>{item.title}</h3>
                <p className={`font-medium leading-relaxed ${item.bg === "bg-gray-900" ? "text-gray-400" : "text-gray-500"}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 bg-[#FF5E44] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-black text-white mb-12 tracking-tight leading-tight"
          >
             准备好开启品牌的<br/>超级智能旅程了吗？
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="https://app.influo-ai.com/"
              className="w-full sm:w-auto bg-white text-[#FF5E44] px-12 py-5 rounded-full text-xl font-black tracking-wide hover:bg-gray-50 transition-colors shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1"
            >
              一键免费试用
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#FF5E44] text-white border-2 border-white/30 px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-colors"
            >
              联系官方商务
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-gray-900 py-16 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold text-white text-xl tracking-tighter flex items-center gap-1">
             influo<span className="text-[#05D0D0]">ai</span>
          </p>
          <p>© 2026 Influo AI Co., Ltd. 专属AI品牌营销团队.</p>
        </div>
      </footer>
    </main>
  );
}
