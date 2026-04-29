import { Link } from "react-router-dom";
import { FaWeixin, FaTiktok } from "react-icons/fa6";
import { SiXiaohongshu, SiSinaweibo } from "react-icons/si";
import Logo from "@/components/ui/Logo";

const footerLinks = [
  { name: "首页", href: "/" },
  { name: "产品矩阵", href: "/products" },
  { name: "核心功能", href: "/features" },
  { name: "定价", href: "/pricing" },
  { name: "联系销售", href: "/contact" },
];

const socialLinks = [
  { label: "微信", Icon: FaWeixin, href: "#" },
  { label: "抖音", Icon: FaTiktok, href: "#" },
  { label: "小红书", Icon: SiXiaohongshu, href: "#" },
  { label: "微博", Icon: SiSinaweibo, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: brand + nav links + socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand */}
          <Logo />

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/40 backdrop-blur-md border border-white/60 flex items-center justify-center text-gray-500 hover:text-[#05D0D0] hover:border-[#05D0D0]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">© 2026 Hangzhou Liaoyu Times Technology Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              浙ICP备XXXXXXXX号-X
            </a>
            <span className="text-gray-300">·</span>
            <a href="#" className="hover:text-gray-600 transition-colors">隐私政策</a>
            <span className="text-gray-300">·</span>
            <a href="#" className="hover:text-gray-600 transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
