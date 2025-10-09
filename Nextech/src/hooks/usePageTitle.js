import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routes } from '../routes/routes'

export const usePageTitle = () => {
  const location = useLocation()

  useEffect(() => {
    const currentRoute = routes.find(route => route.path === location.pathname)
    
    if (currentRoute) {
      document.title = currentRoute.title
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', currentRoute.description)
      } else {
        const newMetaDescription = document.createElement('meta')
        newMetaDescription.name = 'description'
        newMetaDescription.content = currentRoute.description
        document.head.appendChild(newMetaDescription)
      }
    } else {
      document.title = 'NEXTECH - Page Not Found'
    }
  }, [location])
}