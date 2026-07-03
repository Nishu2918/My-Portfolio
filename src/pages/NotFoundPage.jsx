import { Button } from '../components/ui/Button'
import { FiArrowLeft } from 'react-icons/fi'

export function NotFoundPage() {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-6xl font-bold text-ink">404</h1>
      <p className="mt-4 text-xl text-ink-muted">
        This page doesn't exist.
      </p>
      <div className="mt-8">
        <Button to="/" variant="primary">
          <FiArrowLeft size={16} />
          Back home
        </Button>
      </div>
    </div>
  )
}
