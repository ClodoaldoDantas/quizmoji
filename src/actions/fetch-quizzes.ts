import prisma from '@/lib/prisma'

export async function fetchQuizzes() {
  const quizzes = await prisma.quiz.findMany()
  return quizzes
}
