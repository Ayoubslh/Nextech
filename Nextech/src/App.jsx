
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import ErrorBoundary from './components/ui/ErrorBoundary'
import ScrollToTop from './components/ui/ScrollToTop'
import { routes, NotFound } from './components/routes/routes.jsx'
import { usePageTitle } from './hooks/usePageTitle'
import { ThemeProvider } from './components/ui/theme-provider'

// Loading component with better UX
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-background">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D44E50] mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-300 text-lg">Loading...</p>
    </div>
  </div>
)

// App Layout wrapper to handle page titles
const AppLayout = ({ children }) => {
  usePageTitle()
  return children
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppLayout>
            <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-500">
              <Header />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Dynamic route generation from config */}
                    {routes.map(({ path, element: Component }) => (
                      <Route 
                        key={path} 
                        path={path} 
                        element={<Component />} 
                      />
                    ))}
                    {/* Catch all route for 404 */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </AppLayout>
        </ThemeProvider>
      </ErrorBoundary>
    </Router>
  )
}

export default App
