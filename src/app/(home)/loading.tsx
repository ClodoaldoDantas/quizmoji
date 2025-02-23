import { Skeleton } from '@/components/ui/skeleton'

export default function HomeLoading() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Skeleton className="h-[150px]" />
      <Skeleton className="h-[150px]" />
    </div>
  )
}
