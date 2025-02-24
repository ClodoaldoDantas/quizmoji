import { Button } from '@/components/ui/button'
import { useReward } from 'react-rewards'

type SubmitAnswerButtonProps = {
  onNextQuestion: () => void
  isDisabled: boolean
  isLastQuestion: boolean
}

export function SubmitAnswerButton({
  onNextQuestion,
  isDisabled,
  isLastQuestion,
}: SubmitAnswerButtonProps) {
  const { reward } = useReward('rewardId', 'confetti')

  function handleNextQuestion() {
    if (isLastQuestion) {
      reward()
    }

    onNextQuestion()
  }

  return (
    <Button
      data-cy="reply-btn"
      className="w-full"
      onClick={handleNextQuestion}
      disabled={isDisabled}
    >
      {isLastQuestion ? 'Finalizar' : 'Próxima'}
    </Button>
  )
}
