import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { name: "首页", href: "/" },
  { name: "产品", href: "/products" },
  { name: "核心功能", href: "/features" },
  { name: "定价", href: "/pricing" },
  { name: "联系销售", href: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "backdrop-blur-xl bg-white/70 border-b border-gray-100/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex items-center z-50">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative text-[15px] font-bold transition-all duration-300 ${
                      isActive ? "text-[#FF5E44]" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF5E44]"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                to="https://app.influo-ai.com/"
                className="bg-[#FF5E44] text-white px-6 py-2.5 rounded-full text-[15px] font-bold hover:bg-[#e04c35] transition-all shadow-[0_5px_15px_rgba(255,94,68,0.2)] hover:shadow-[0_8px_20px_rgba(255,94,68,0.3)] hover:-translate-y-0.5"
              >
                开始试用
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 p-2 hover:bg-gray-100/50 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col space-y-6 text-center mt-10">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-2xl font-black block transition-colors ${
                        isActive ? "text-[#FF5E44]" : "text-gray-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                className="pt-6 border-t border-gray-100 mt-6"
              >
                <Link
                  to="https://app.influo-ai.com/"
                  className="block w-full bg-[#FF5E44] text-white px-6 py-4 rounded-full text-lg font-black hover:bg-[#e04c35] transition-all shadow-lg shadow-orange-500/20"
                >
                  开始免费试用
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
