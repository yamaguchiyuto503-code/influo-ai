import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Check, X, ArrowRight, Server, BookOpen, Briefcase, Zap, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/layout/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

type Plan = {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  desc: string;
  popular: boolean;
  features: { text: string; highlight?: boolean }[];
  cta: string;
};

const proPlans: Plan[] = [
  {
    id: "pro",
    name: "专业版 Pro",
    price: "¥ 199",
    period: "/ 月",
    desc: "适合独立创作者与一人公司的效率引擎。",
    popular: false,
    features: [
      { text: "每月专属 1,000 算力点 (Credits)" },
      { text: "锁定 1 个专属品牌库 (Brand Kit)" },
      { text: "专业级 AI 营销策划引擎", highlight: true },
      { text: "高精视觉图文导出权限 (1080P)" },
      { text: "支持绑定 2 个分发账号" },
    ],
    cta: "立即订阅专业版",
  },
  {
    id: "ultra",
    name: "旗舰版 Ultra",
    badge: "专家首选",
    price: "¥ 399",
    period: "/ 月",
    desc: "适合高净值项目与追求极致视觉体验的专家。",
    popular: true,
    features: [
      { text: "每月超大 3,000 算力点 (Credits)" },
      { text: "旗舰级深度推理与复杂逻辑大脑", highlight: true },
      { text: "解锁影视级动态视频生成权限", highlight: true },
      { text: "尊享 4K 极速视觉原图通道", highlight: true },
      { text: "支持绑定 5 个分发账号" },
    ],
    cta: "立即解锁旗舰能力",
  },
];

const teamPlans: Plan[] = [
  {
    id: "team-pro",
    name: "团队专业版 Team Pro",
    price: "¥ 299",
    period: "/ 人/月",
    desc: "适合中小企业市场部与公关组的协同中枢。",
    popular: false,
    features: [
      { text: "团队共享算力池 (2,000 点/人)" },
      { text: "支持 3 个品牌库" },
      { text: "专属团队资产共享空间", highlight: true },
      { text: "内容发布审批流", highlight: true },
      { text: "专业级商业 AI 策划引擎" },
      { text: "1080P 无水印商用图导出" },
      { text: "矩阵账号一键分发" },
    ],
    cta: "开始团队协作",
  },
  {
    id: "team-ultra",
    name: "团队旗舰版 Team Ultra",
    badge: "企业优选",
    price: "¥ 499",
    period: "/ 人/月",
    desc: "适合代运营机构 (乙方) 与大型市场部的生产力怪兽。",
    popular: true,
    features: [
      { text: "超大团队算力池 (5,000 点/人)" },
      { text: "支持 15 个品牌库" },
      { text: "强制内容发布审批流", highlight: true },
      { text: "全量解锁旗舰级推理与视频生成大脑", highlight: true },
      { text: "矩阵账号一键分发" },
    ],
    cta: "解锁企业级生产力",
  },
];

// ─── Feature comparison data ─────────────────────────────────────────────────

type TableRow = {
  feature: string;
  pro: string | boolean;
  ultra: string | boolean;
  teamOnly?: boolean;
};

const proTableRows: TableRow[] = [
  { feature: "每月算力额度 (Credits)", pro: "1,000 点", ultra: "3,000 点" },
  { feature: "品牌库 (Brand Kit) 数量", pro: "1 个", ultra: "1 个" },
  { feature: "AI 策划大脑等级", pro: "专业级", ultra: "旗舰级推理大脑" },
  { feature: "视觉图文导出品质", pro: "1080P 高清", ultra: "4K 极速原图" },
  { feature: "影视级视频生成", pro: false, ultra: true },
  { feature: "分发账号绑定数量", pro: "2 个", ultra: "5 个" },
  { feature: "优先算力队列", pro: false, ultra: true },
];

const teamTableRows: TableRow[] = [
  { feature: "每月算力额度 (Credits)", pro: "2,000 点/人", ultra: "5,000 点/人" },
  { feature: "品牌库 (Brand Kit) 数量", pro: "3 个", ultra: "15 个" },
  { feature: "AI 策划大脑等级", pro: "专业级商业引擎", ultra: "全量旗舰级大脑" },
  { feature: "视觉图文导出品质", pro: "1080P 无水印商用", ultra: "4K 极速原图" },
  { feature: "影视级视频生成", pro: false, ultra: true },
  { feature: "矩阵账号一键分发", pro: true, ultra: true },
  { feature: "团队资产共享空间", pro: false, ultra: true, teamOnly: true },
  { feature: "内容发布强制审批流", pro: true, ultra: true, teamOnly: true },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PlanCard({ plan, idx }: { plan: Plan; idx: number }) {
  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col rounded-[2rem] p-8 lg:p-10 border transition-all duration-500 ${
        plan.popular
          ? "bg-white/50 backdrop-blur-2xl border-[#FF5E44]/50 shadow-[0_0_0_1px_rgba(255,94,68,0.2),0_30px_60px_rgba(255,94,68,0.12)] md:-mt-6"
          : "bg-white/30 backdrop-blur-2xl border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
      }`}
    >
      {/* Popular glow ring */}
      {plan.popular && (
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FF5E44]/8 to-[#05D0D0]/8 pointer-events-none" />
      )}

      {/* Top badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF5E44] to-orange-400 text-white px-5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase shadow-lg shadow-orange-500/30">
          ✦ {plan.badge}
        </div>
      )}

      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-xl font-black text-gray-900 mb-1">{plan.name}</h3>
        <p className="text-sm text-gray-500 font-medium mb-6 min-h-[40px]">{plan.desc}</p>

        <div className="flex items-baseline gap-1 mb-8">
          <span className={`text-5xl font-black tracking-tight ${plan.popular ? "text-gray-900" : "text-gray-800"}`}>
            {plan.price}
          </span>
          <span className="text-gray-400 font-semibold text-sm ml-1">{plan.period}</span>
        </div>
        {!plan.popular && plan.id === "pro" && (
          <p className="text-xs text-[#05D0D0] font-bold mb-4 -mt-6">年付享 8 折优惠</p>
        )}
        {!plan.popular && plan.id === "team-pro" && (
          <p className="text-xs text-[#05D0D0] font-bold mb-4 -mt-6">3 人起购，按月计费</p>
        )}
        {plan.popular && (plan.id === "team-ultra") && (
          <p className="text-xs text-[#05D0D0] font-bold mb-4 -mt-6">3 人起购，按月计费</p>
        )}

        <ul className="space-y-3.5 mb-10 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${f.highlight ? "bg-[#FF5E44]/15" : "bg-[#05D0D0]/10"}`}>
                <Check className={`w-3 h-3 ${f.highlight ? "text-[#FF5E44]" : "text-[#05D0D0]"}`} />
              </div>
              <span className={`text-sm leading-tight font-medium ${f.highlight ? "text-gray-900 font-bold" : "text-gray-600"}`}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        <Link
          to="https://app.influo-ai.com/"
          className={`group flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-sm transition-all duration-300 ${
            plan.popular
              ? "bg-[#FF5E44] text-white hover:bg-[#e04c35] shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5"
              : "bg-white/60 backdrop-blur-md text-gray-800 border border-white/60 hover:bg-white/90 hover:-translate-y-0.5"
          }`}
        >
          {plan.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [tab, setTab] = useState<"pro" | "team">("pro");
  const currentPlans = tab === "pro" ? proPlans : teamPlans;
  const currentTable = tab === "pro" ? proTableRows : teamTableRows;

  return (
    <main className="min-h-screen bg-transparent relative">
      <Navbar />

      {/* ── Section 1: Header ── */}
      <section className="pt-28 pb-12 relative overflow-hidden text-center z-10">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-sm font-bold tracking-widest text-[#05D0D0] uppercase mb-6 shadow-sm"
          >
            PRICING
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-5 tracking-tight leading-[1.1]"
          >
            投资你的专属{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E44] to-[#05D0D0]">
              品牌营销团队
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            以"算力点数 (Credits)"为单位灵活计费，精准匹配从个人创作到企业大规模内容生产的所有场景。
          </motion.p>
        </div>
      </section>

      {/* ── Section 1.5: Free Trial Banner ── */}
      <section className="pb-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="relative rounded-[2rem] overflow-hidden border border-[#05D0D0]/30 bg-gradient-to-br from-[#05D0D0]/10 via-white/40 to-[#FF5E44]/8 backdrop-blur-2xl shadow-[0_0_40px_rgba(5,208,208,0.15)] p-8 md:p-10 text-center"
          >
            {/* Animated glow orbs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#05D0D0]/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FF5E44]/15 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "0.8s" }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-[#05D0D0]/30 px-4 py-1 rounded-full text-xs font-black text-[#05D0D0] uppercase tracking-widest mb-4 shadow-sm">
                <Gift className="w-3.5 h-3.5" /> 限时免费体验
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-snug tracking-tight">
                免绑卡试用：完美跑通一次「品牌魔法全流程」
              </h2>
              <p className="text-gray-600 font-medium text-base mb-7 max-w-xl mx-auto leading-relaxed">
                🎁 注册即领{" "}
                <span className="font-black text-[#05D0D0]">300 算力点 (Credits)</span>，无需信用卡，立即体验
                "品牌调性识别 + 营销策划全案 + 高精物料预览"全链路。
              </p>
              <Link
                to="https://app.influo-ai.com/"
                className="group inline-flex items-center gap-2 bg-[#05D0D0] text-white px-9 py-4 rounded-full font-black text-base hover:bg-[#04b8b8] transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                立即零成本开启 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Toggle + Pricing Cards ── */}
      <section className="pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          {/* Toggle */}
          <div className="flex justify-center mb-14">
            <div className="bg-white/30 backdrop-blur-md p-1.5 rounded-full inline-flex relative shadow-inner border border-white/50">
              {[
                { key: "pro" as const, label: "个人版 (Pro C)" },
                { key: "team" as const, label: "团队版 (Team)" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`relative z-10 px-8 py-3.5 rounded-full text-sm font-black tracking-wide transition-colors duration-300 ${
                    tab === key ? "text-white" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {label}
                </button>
              ))}
              <motion.div
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gray-900 rounded-full shadow-lg"
                animate={{ left: tab === "pro" ? "6px" : "calc(50% + 1.5px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Cards */}
          <AnimatePresence mode="popLayout">
            <div key={tab} className="grid md:grid-cols-2 gap-8 items-start">
              {currentPlans.map((plan, idx) => (
                <PlanCard key={plan.id} plan={plan} idx={idx} />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Section 3: Feature Comparison Table ── */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">功能权益详细对比</h2>
            <p className="text-gray-500 mt-3 text-base font-medium">
              透明的权益区分，帮你锁定最适合的品牌武器。
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-[2rem] border border-white/40 bg-white/20 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="py-5 px-6 font-bold text-gray-500 text-sm w-1/2">功能模块</th>
                  <th className="py-5 px-6 font-black text-gray-700 text-sm text-center w-1/4">
                    {tab === "pro" ? "专业版 Pro" : "Team Pro"}
                  </th>
                  <th className="py-5 px-6 font-black text-[#FF5E44] text-sm text-center w-1/4">
                    {tab === "pro" ? "旗舰版 Ultra ✦" : "Team Ultra ✦"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {currentTable.map((row, idx) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="border-b border-white/20 hover:bg-white/25 transition-colors last:border-none"
                    >
                      <td className="py-4 px-6 text-sm font-semibold text-gray-700">
                        {row.feature}
                        {row.teamOnly && (
                          <span className="ml-2 text-[10px] font-black text-[#05D0D0] uppercase tracking-wider bg-[#05D0D0]/10 px-1.5 py-0.5 rounded-full">
                            团队专属
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="w-5 h-5 mx-auto text-[#05D0D0]" />
                          ) : (
                            <X className="w-4 h-4 mx-auto text-gray-300" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-gray-700">{row.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center bg-[#FF5E44]/[0.025]">
                        {typeof row.ultra === "boolean" ? (
                          row.ultra ? (
                            <Check className="w-5 h-5 mx-auto text-[#FF5E44]" />
                          ) : (
                            <X className="w-4 h-4 mx-auto text-gray-300" />
                          )
                        ) : (
                          <span className="text-sm font-black text-gray-900">{row.ultra}</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 4: Credit Pack Add-on ── */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#05D0D0]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4 text-center"
          >
            算力加油包{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05D0D0] to-[#FF5E44]">
              (Credit Pack)
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 font-medium text-center mb-12 max-w-2xl mx-auto"
          >
            灵感不中断，算力随时充。基础订阅额度耗尽后，可按需单独购买额外的算力点数，购买后额度永不过期。
          </motion.p>

          {/* Inline Credit Pack Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { credits: "500", price: "¥ 5", perCredit: "¥ 0.01 / 点（基准价）", badge: null },
              { credits: "1,500", price: "¥ 13", perCredit: "¥ 0.0087 / 点", badge: "省 13%" },
              { credits: "5,000", price: "¥ 40", perCredit: "¥ 0.008 / 点", badge: "省 20%" },
              { credits: "20,000", price: "¥ 140", perCredit: "¥ 0.007 / 点", badge: "省 30%" },
            ].map((pack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.07 }}
                className="relative rounded-2xl p-6 border flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 bg-white/30 backdrop-blur-2xl border-white/50 hover:shadow-lg"
              >
                {pack.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase whitespace-nowrap bg-gray-800 text-white">
                    {pack.badge}
                  </div>
                )}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">算力点数</p>
                  <p className="text-3xl font-black tracking-tight text-gray-900">
                    {pack.credits}<span className="text-base font-semibold text-gray-500 ml-1">点</span>
                  </p>
                </div>
                <div className="border-t border-white/30 pt-3">
                  <p className="text-2xl font-black text-gray-900">{pack.price}</p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{pack.perCredit}</p>
                </div>
                <Link
                  to="https://app.influo-ai.com/"
                  className="mt-auto text-center py-2.5 rounded-full text-sm font-bold transition-all bg-white/60 text-gray-800 border border-white/60 hover:bg-white/90"
                >
                  立即购买
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-gray-400 mt-6 font-medium"
          >
            ✦ 算力点数储值后永不过期，可随时叠加使用，无最小消费限制。
          </motion.p>
        </div>
      </section>

      {/* ── Section 5: Enterprise Customization ── */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-5"
            >
              企业级深度定制服务
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              针对对数据安全有极高边界要求、深水区复杂业务改造的旗舰级商业巨头。
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                icon: Briefcase,
                title: "专属行业模型微调",
                desc: "基于您行业的历史高质量内容数据，对营销大脑进行专项微调训练，让 AI 输出精准贴合行业黎语，自动规避政策红线。",
                dark: false,
              },
              {
                icon: BookOpen,
                title: "企业自研知识引擎搭建",
                desc: "首席方案专家驻场协助您梳理企业十年数字资产，完成向量化深度切片处理，构建品牌专属 RAG 知识引擎。",
                dark: false,
              },
              {
                icon: Server,
                title: "完全私有化部署 (GPU 节点)",
                desc: "将整个营销 AI 框架与专用模型，完美闭环部署于您的专属内网集群，彻底隔离公网，根除数据出库风险。",
                dark: true,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className={`p-10 rounded-[2.5rem] border hover:-translate-y-2 transition-all duration-500 ${
                  item.dark
                    ? "bg-gray-900/85 backdrop-blur-2xl border-gray-700 shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                    : "bg-white/40 backdrop-blur-2xl border-white/50 hover:shadow-xl"
                }`}
              >
                <item.icon className={`w-10 h-10 mb-7 ${item.dark ? "text-white" : "text-gray-900"}`} />
                <h3 className={`text-2xl font-black mb-4 tracking-tight ${item.dark ? "text-white" : "text-gray-900"}`}>
                  {item.title}
                </h3>
                <p className={`font-medium leading-relaxed text-sm ${item.dark ? "text-gray-400" : "text-gray-500"}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-black hover:bg-gray-800 transition-all shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1"
            >
              联系专属大客户经理获取方案 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: Bottom CTA ── */}
      <section className="py-40 relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5E44]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#05D0D0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
          >
            准备好开启品牌的<br />超级智能旅程了吗？
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 space-y-2"
          >
            <p className="text-gray-500 font-medium text-lg">
              🎁 <strong className="text-gray-700">个人 / 团队：</strong>注册即领 300 算力点，零成本体验一次惊艳的「图文全案生成」。
            </p>
            <p className="text-gray-500 font-medium text-lg">
              🏢 <strong className="text-gray-700">企业大客：</strong>联系商务对接报价，获取「专属模型微调演示」。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              to="https://app.influo-ai.com/"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF5E44] text-white px-10 py-5 rounded-full text-lg font-black hover:bg-[#e04c35] transition-all shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-1"
            >
              领取 300 点免费试用 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md text-gray-800 border-2 border-white/60 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/80 hover:-translate-y-1 transition-all"
            >
              联系官方商务团队
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
