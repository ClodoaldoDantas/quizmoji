import { Loader2Icon } from 'lucide-react'

export default function QuizPageLoading() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <Loader2Icon className="size-12 animate-spin text-blue-600" />
    </main>
  )
}
