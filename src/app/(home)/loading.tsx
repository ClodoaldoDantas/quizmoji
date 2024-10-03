import { Skeleton } from '@/components/ui/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Skeleton className="h-[150px]" />
      <Skeleton className="h-[150px]" />
      <Skeleton className="h-[150px]" />
    </div>
  )
}
