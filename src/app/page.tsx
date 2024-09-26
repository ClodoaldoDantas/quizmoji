import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">🧠 Quizmoji 🏆</h1>
        <Button>Iniciar Quiz</Button>
      </div>
    </main>
  )
}
