import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'

export async function fetchQuiz({ slug }: { slug: string }) {
  const quiz = await prisma.quiz.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      title: true,
      icon: true,
      questions: {
        select: {
          id: true,
          prompt: true,
          choices: true,
          correctAnswer: true,
        },
      },
    },
  })

  if (!quiz) {
    notFound()
  }

  const questions = quiz.questions.map((question) => {
    return {
      id: question.id,
      prompt: question.prompt,
      choices: JSON.parse(question.choices),
      correctAnswer: question.correctAnswer,
    }
  })

  return {
    id: quiz.id,
    title: quiz.title,
    icon: quiz.icon,
    questions,
  }
}
