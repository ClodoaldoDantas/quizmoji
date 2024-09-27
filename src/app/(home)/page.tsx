import { quizzes } from '@/data/quizzes'
import { QuizCard } from './quiz-card'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center py-12 px-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.slug} data={quiz} />
          ))}
        </div>
      </div>
    </main>
  )
}
