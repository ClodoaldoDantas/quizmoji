import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

interface QuizCardProps {
  data: {
    name: string
    slug: string
    icon: string
  }
}

export function QuizCard({ data }: QuizCardProps) {
  return (
    <Link key={data.name} href={`/quizzes/${data.slug}`}>
      <Card className="hover:bg-zinc-200 transition-colors duration-200 cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <span className="text-6xl mb-4">{data.icon}</span>
          <h2 className="text-xl text-zinc-700">{data.name}</h2>
        </CardContent>
      </Card>
    </Link>
  )
}
