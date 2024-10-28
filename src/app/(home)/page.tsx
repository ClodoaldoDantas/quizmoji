import { fetchQuizzes } from '@/actions/fetch-quizzes'
import { CategoryCard } from './_components/category-card'

export default async function Home() {
  const quizzes = await fetchQuizzes()

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
      {quizzes.map((quiz) => (
        <CategoryCard key={quiz.slug} data={quiz} />
      ))}
    </div>
  )
}
