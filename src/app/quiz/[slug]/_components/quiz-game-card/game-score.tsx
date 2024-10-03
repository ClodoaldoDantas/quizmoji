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
  return (
    <CardContent className="space-y-6">
      <p className="text-base">
        🏆 Você acertou {score} de {totalQuestions}!
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
