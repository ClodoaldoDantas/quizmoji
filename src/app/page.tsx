import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">🧠 Quizmoji 🏆</h1>

        <p className="text-muted-foreground">
          Teste seus conhecimentos e veja se você é um verdadeiro mestre dos
          emojis!
        </p>

        <Button type="button">Iniciar Quiz</Button>
      </div>
    </main>
  )
}
