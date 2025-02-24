import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

type GameHeaderProps = {
  icon: string
  title: string
  currentQuestionNumber: number
  totalQuestions: number
  showResults: boolean
}

export function GameHeader({
  icon,
  title,
  currentQuestionNumber,
  totalQuestions,
  showResults,
}: GameHeaderProps) {
  const progress = (currentQuestionNumber / totalQuestions) * 100

  return (
    <CardHeader>
      <CardTitle>{`${icon} ${title}`}</CardTitle>

      {!showResults && (
        <>
          <div className="py-2">
            <Progress value={progress} className="w-full" />
          </div>

          <CardDescription data-cy="current-question" className="text-base">
            Pergunta {currentQuestionNumber} de {totalQuestions}
          </CardDescription>
        </>
      )}
    </CardHeader>
  )
}
