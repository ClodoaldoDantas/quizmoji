import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <span className="text-6xl">🔎</span>

      <div className="mt-4 mb-5 text-center">
        <h2 className="font-semibold text-2xl">Página não encontrada</h2>
        <p className="text-lg text-gray-600 mt-1">
          A página que você está procurando não existe.
        </p>
      </div>

      <Button asChild>
        <Link href="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  )
}
