import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

interface CategoryCardProps {
  data: {
    title: string
    slug: string
    icon: string
  }
}

export function CategoryCard({ data }: CategoryCardProps) {
  return (
    <Link key={data.title} href={`/quiz/${data.slug}`}>
      <Card className="hover:bg-zinc-200 transition-colors duration-200 cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <span className="text-6xl mb-4">{data.icon}</span>
          <h2 className="text-xl text-zinc-700">{data.title}</h2>
        </CardContent>
      </Card>
    </Link>
  )
}
