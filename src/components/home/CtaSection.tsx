import { Link } from "react-router-dom";
import { ArrowRight, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-40 relative overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#FF5E44]/5 to-[#05D0D0]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl mb-8">
            <Sparkle className="w-8 h-8 text-[#FF5E44]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            准备好打造你的<br/>品牌营销团队了吗？
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 font-medium">
            告别昂贵的人力试错，现在就让 AI 继承品牌意志。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="https://app.influo-ai.com/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#FF5E44] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#e04c35] transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/30"
            >
              立刻免费体验 <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all hover:border-gray-300"
            >
              联系销售方案
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
