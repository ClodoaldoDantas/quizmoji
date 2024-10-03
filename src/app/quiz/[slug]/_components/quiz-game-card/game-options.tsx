import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type GameOptionsProps = {
  selectedAnswer: string | undefined
  choices: string[]
  onValueChange: (value: string) => void
}

export function GameOptions({
  selectedAnswer,
  choices,
  onValueChange,
}: GameOptionsProps) {
  return (
    <RadioGroup value={selectedAnswer} onValueChange={onValueChange}>
      {choices.map((choice, index) => (
        <div key={String(index)} className="flex items-center space-x-2">
          <RadioGroupItem value={choice} id={`option-${index}`} />
          <Label className="text-base" htmlFor={`option-${index}`}>
            {choice}
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
