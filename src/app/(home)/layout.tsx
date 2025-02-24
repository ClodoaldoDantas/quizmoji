import type { ReactNode } from 'react'

export default function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main className="min-h-dvh w-full flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl w-full mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-800 mb-4">
            🧠 Quizmoji 🏆
          </h1>

          <p className="text-muted-foreground max-w-sm mx-auto">
            Teste seus conhecimentos e veja se você é um verdadeiro mestre dos
            emojis!
          </p>
        </header>

        {children}
      </div>
    </main>
  )
}
