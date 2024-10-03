import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <span className="text-6xl">🚨</span>

      <h2 className="font-semibold text-2xl mt-4 mb-6">
        Página não encontrada
      </h2>

      <Button asChild>
        <Link href="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  )
}
