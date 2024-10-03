import { Button } from '@/components/ui/button'

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
  return (
    <Button className="w-full" onClick={onNextQuestion} disabled={isDisabled}>
      {isLastQuestion ? 'Finalizar' : 'Próxima'}
    </Button>
  )
}
