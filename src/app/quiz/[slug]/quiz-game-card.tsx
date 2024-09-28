'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { Quiz } from '@/types/quiz'
import Link from 'next/link'
import { useState } from 'react'

export function QuizGameCard({ quiz }: { quiz: Quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>()
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  function handleNextQuestion() {
    const correctAnswer = quiz.questions[currentQuestionIndex].correctAnswer

    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }

    const hasNextQuestion = currentQuestionIndex < quiz.questions.length - 1

    if (hasNextQuestion) {
      setSelectedAnswer(undefined)
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  function handleRestartQuiz() {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(undefined)
    setScore(0)
    setShowResults(false)
  }

  const totalQuestions = quiz.questions.length
  const currentQuestionNumber = currentQuestionIndex + 1
  const currentQuestion = quiz.questions[currentQuestionIndex]

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {quiz.icon} {quiz.title}
        </CardTitle>

        <CardDescription className="text-base">
          Pergunta {currentQuestionNumber} de {totalQuestions}
        </CardDescription>
      </CardHeader>

      {showResults ? (
        <CardContent className="space-y-6">
          <p className="text-base">
            🏆 Você acertou {score} de {totalQuestions}!
          </p>

          <div className="space-y-2">
            <Button className="w-full" onClick={handleRestartQuiz}>
              Tentar novamente
            </Button>

            <Button variant="outline" className="w-full" asChild>
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </CardContent>
      ) : (
        <CardContent className="space-y-6">
          <p className="text-3xl">{currentQuestion.prompt}</p>

          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            {currentQuestion.choices.map((choice, index) => (
              <div key={String(index)} className="flex items-center space-x-2">
                <RadioGroupItem value={choice} id={`option-${index}`} />
                <Label className="text-base" htmlFor={`option-${index}`}>
                  {choice}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <Button
            className="w-full"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestionIndex === totalQuestions - 1
              ? 'Finalizar'
              : 'Próxima'}
          </Button>
        </CardContent>
      )}
    </Card>
  )
}
