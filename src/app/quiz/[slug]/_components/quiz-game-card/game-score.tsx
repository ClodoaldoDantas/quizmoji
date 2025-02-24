import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import Link from 'next/link'

type GameScoreProps = {
  score: number
  totalQuestions: number
  onRestartQuiz: () => void
}

export function GameScore({
  score,
  totalQuestions,
  onRestartQuiz,
}: GameScoreProps) {
  const icon = score >= Math.ceil(totalQuestions / 2) ? '🏆' : '😢'

  return (
    <CardContent className="space-y-6">
      <p data-cy="result" className="text-base">
        {icon} Você acertou {score} de {totalQuestions}!
      </p>

      <div className="space-y-2">
        <Button className="w-full" onClick={onRestartQuiz}>
          Tentar novamente
        </Button>

        <Button variant="outline" className="w-full" asChild>
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </CardContent>
  )
}
