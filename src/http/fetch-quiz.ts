type FetchQuizResponse = {
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
  } | null
}

type FetchQuizParams = {
  slug: string
}

export async function fetchQuiz({
  slug,
}: FetchQuizParams): Promise<FetchQuizResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/quizzes/${slug}`,
  )

  if (response.status === 404) {
    return { quiz: null }
  }

  const data = await response.json()

  return data
}
