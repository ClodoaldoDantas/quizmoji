import { quizzes } from '@/data/quizzes'
import { redirect } from 'next/navigation'
import { QuizGameCard } from './_components/quiz-game-card'

export default function QuizPage({ params }: { params: { slug: string } }) {
  const quiz = quizzes.find((quiz) => quiz.slug === params.slug)

  if (!quiz) {
    redirect('/')
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full mx-auto space-y-4">
        <QuizGameCard quiz={quiz} />
      </div>
    </main>
  )
}
