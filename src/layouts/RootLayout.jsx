import { Outlet, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { SkipToContent } from '../components/layout/SkipToContent'
import { ScrollProgressBar } from '../components/motion/ScrollProgressBar'
import { PageTransition } from '../components/motion/PageTransition'
import { ScrollToTop } from '../lib/ScrollToTop'

export function RootLayout() {
  const location = useLocation()

  return (
    <>
      <SkipToContent />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" className="min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <ScrollToTop />
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
