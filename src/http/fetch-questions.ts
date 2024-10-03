type FetchQuestionsResponse = {
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

type FetchQuestionsParams = {
  slug: string
}

export async function fetchQuestions({
  slug,
}: FetchQuestionsParams): Promise<FetchQuestionsResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/questions/${slug}`,
  )

  const data = await response.json()

  return data
}
