import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type GameHeaderProps = {
  icon: string
  title: string
  currentQuestionNumber: number
  totalQuestions: number
}

export function GameHeader({
  icon,
  title,
  currentQuestionNumber,
  totalQuestions,
}: GameHeaderProps) {
  return (
    <CardHeader>
      <CardTitle>{`${icon} ${title}`}</CardTitle>

      <CardDescription className="text-base">
        Pergunta {currentQuestionNumber} de {totalQuestions}
      </CardDescription>
    </CardHeader>
  )
}
