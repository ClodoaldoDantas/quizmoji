'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <span className="text-6xl">🚨</span>

      <div className="mt-4 mb-5 text-center">
        <h2 className="font-semibold text-2xl ">Ocorreu um problema</h2>
        <p className="text-lg text-gray-600 mt-1">
          Tente novamente mais tarde.
        </p>
      </div>

      <Button onClick={() => reset()}>Tentar novamente</Button>
    </div>
  )
}
