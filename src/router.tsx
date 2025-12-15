import { createRouter, Link } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    context: {
      queryClient: new QueryClient(),
    },
    defaultPreloadStaleTime: 0,
    defaultPreload: 'intent', //preload all the links
    defaultNotFoundComponent: () => {
      return (
        <div>
          <p>Not found!</p>
          <Link to="/">Go home</Link>
        </div>
      )
    },
  })

  return router
}
