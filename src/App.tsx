import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import SilkLines from './components/ui/SilkLines'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import PageTransition from './components/ui/PageTransition'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import FeaturesPage from './pages/FeaturesPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import ReportTemplatePage from './pages/ReportTemplatePage'

export default function App() {
  const location = useLocation()
  const isReportRoute = location.pathname.startsWith('/report-template')

  return (
    <>
      {!isReportRoute && <ScrollProgressBar />}
      {!isReportRoute && <SilkLines />}
      {!isReportRoute && <ScrollToTop />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/products" element={<PageTransition><ProductsPage /></PageTransition>} />
          <Route path="/features" element={<PageTransition><FeaturesPage /></PageTransition>} />
          <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/report-template" element={<ReportTemplatePage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
