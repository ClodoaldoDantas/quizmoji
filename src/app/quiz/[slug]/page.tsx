import { fetchQuiz } from '@/actions/fetch-quiz'
import { fetchQuizzes } from '@/actions/fetch-quizzes'
import { QuizGameCard } from './_components/quiz-game-card'

export async function generateStaticParams() {
  const quizzes = await fetchQuizzes()
  return quizzes.map((quiz) => ({ slug: quiz.slug }))
}

export default async function QuizPage({
  params,
}: { params: { slug: string } }) {
  const quiz = await fetchQuiz({ slug: params.slug })

  return (
    <main className="min-h-dvh w-full flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full mx-auto flex flex-col gap-4">
        <QuizGameCard quiz={quiz} />
        <span id="rewardId" className="self-center" />
      </div>
    </main>
  )
}
