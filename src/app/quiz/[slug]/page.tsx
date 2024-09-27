import { quizzes } from '@/data/quizzes'
import { redirect } from 'next/navigation'

export default function QuizPage({ params }: { params: { slug: string } }) {
  const quiz = quizzes.find((quiz) => quiz.slug === params.slug)

  if (!quiz) {
    redirect('/')
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-zinc-800 mb-4 text-center">
          {quiz.icon} {quiz.name}
        </h1>
      </div>
    </main>
  )
}
