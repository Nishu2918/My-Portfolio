import { RouterProvider } from 'react-router'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './theme/ThemeProvider'
import { router } from './router'

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Analytics />
    </ThemeProvider>
  )
}
