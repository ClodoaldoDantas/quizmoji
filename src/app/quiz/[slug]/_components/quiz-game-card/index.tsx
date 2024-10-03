'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useReducer } from 'react'
import { GameHeader } from './game-header'
import { GameOptions } from './game-options'
import { GameScore } from './game-score'
import { SubmitAnswerButton } from './submit-answer-button'

type QuizGameState = {
  currentQuestionIndex: number
  selectedAnswer: string | undefined
  score: number
  showResults: boolean
}

enum QuizGameActionType {
  UPDATE_ANSWER = 'UPDATE_ANSWER',
  NEXT_QUESTION = 'NEXT_QUESTION',
  RESTART_QUIZ = 'RESTART_QUIZ',
}

type QuizGameAction = {
  type: QuizGameActionType
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  payload?: any
}

const initialState: QuizGameState = {
  currentQuestionIndex: 0,
  selectedAnswer: undefined,
  score: 0,
  showResults: false,
}

function quizGameReducer(state: QuizGameState, action: QuizGameAction) {
  const { type, payload } = action

  switch (type) {
    case QuizGameActionType.UPDATE_ANSWER: {
      return {
        ...state,
        selectedAnswer: payload,
      }
    }

    case QuizGameActionType.NEXT_QUESTION: {
      const { currentQuestionIndex, selectedAnswer, score } = state
      const { questions } = payload

      const currentQuestion = questions[currentQuestionIndex]
      const correctAnswer = selectedAnswer === currentQuestion.correctAnswer
      const hasNextQuestion = currentQuestionIndex < questions.length - 1

      return {
        ...state,
        score: correctAnswer ? score + 1 : score,
        currentQuestionIndex: hasNextQuestion
          ? currentQuestionIndex + 1
          : currentQuestionIndex,
        selectedAnswer: undefined,
        showResults: !hasNextQuestion,
      }
    }

    case QuizGameActionType.RESTART_QUIZ: {
      return initialState
    }

    default: {
      return state
    }
  }
}

type QuizGameCardProps = {
  quiz: {
    id: string
    title: string
    icon: string
    questions: {
      id: string
      prompt: string
      choices: string[]
      correctAnswer: string
    }[]
  }
}

export function QuizGameCard({ quiz }: QuizGameCardProps) {
  const [state, dispatch] = useReducer(quizGameReducer, initialState)

  console.log('quiz', quiz)

  function handleNextQuestion() {
    dispatch({
      type: QuizGameActionType.NEXT_QUESTION,
      payload: {
        questions: quiz.questions,
      },
    })
  }

  function handleRestartQuiz() {
    dispatch({
      type: QuizGameActionType.RESTART_QUIZ,
    })
  }

  function handleUpdateAnswer(answer: string) {
    dispatch({
      type: QuizGameActionType.UPDATE_ANSWER,
      payload: answer,
    })
  }

  const totalQuestions = quiz.questions.length
  const currentQuestionNumber = state.currentQuestionIndex + 1
  const currentQuestion = quiz.questions[state.currentQuestionIndex]
  const isLastQuestion = state.currentQuestionIndex === totalQuestions - 1

  return (
    <Card>
      <GameHeader
        icon={quiz.icon}
        title={quiz.title}
        currentQuestionNumber={currentQuestionNumber}
        totalQuestions={totalQuestions}
      />

      {state.showResults ? (
        <GameScore
          score={state.score}
          totalQuestions={totalQuestions}
          onRestartQuiz={handleRestartQuiz}
        />
      ) : (
        <CardContent className="space-y-6">
          <p className="text-3xl">{currentQuestion.prompt}</p>

          <GameOptions
            selectedAnswer={state.selectedAnswer}
            choices={currentQuestion.choices}
            onValueChange={handleUpdateAnswer}
          />

          <SubmitAnswerButton
            isDisabled={!state.selectedAnswer}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={isLastQuestion}
          />
        </CardContent>
      )}
    </Card>
  )
}
