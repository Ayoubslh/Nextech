import { lazy } from 'react'

// Lazy load pages for better performance
const Landing = lazy(() => import('../pages/landing'))
const Events = lazy(() => import('../pages/events'))
const Members = lazy(() => import('../pages/members'))
const Projects = lazy(() => import('../pages/projects'))

// 404 Page Component
const NotFound = () => (
  <div className="bg-gray-200 min-h-screen font-inter pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-[#D44E50] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a 
        href="/" 
        className="inline-block bg-[#D44E50] text-white px-6 py-3 rounded-md hover:bg-[#b03d3f] transition-colors"
      >
        Go Home
      </a>
    </div>
  </div>
)

// Route configuration
export const routes = [
  {
    path: '/',
    element: Landing,
    title: 'Home - NEXTECH',
    description: 'Welcome to NEXTECH - Advancing technology education and innovation'
  },
  {
    path: '/events',
    element: Events,
    title: 'Events - NEXTECH',
    description: 'Discover upcoming tech events, workshops, and meetups organized by NEXTECH'
  },
  {
    path: '/projects',
    element: Projects,
    title: 'Projects - NEXTECH',
    description: 'Explore innovative projects developed by NEXTECH members'
  },
  {
    path: '/members',
    element: Members,
    title: 'Members - NEXTECH',
    description: 'Meet the talented individuals who make up the NEXTECH community'
  }
]

export { NotFound }