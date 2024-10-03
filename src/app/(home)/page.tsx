import { fetchQuizzes } from '@/http/fetch-quizzes'
import { CategoryCard } from './_components/category-card'

export default async function Home() {
  const { quizzes } = await fetchQuizzes()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {quizzes.map((quiz) => (
        <CategoryCard key={quiz.slug} data={quiz} />
      ))}
    </div>
  )
}
