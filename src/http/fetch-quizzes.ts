type FetchQuizzesResponse = {
  quizzes: {
    id: string
    title: string
    icon: string
    slug: string
  }[]
}

export async function fetchQuizzes(): Promise<FetchQuizzesResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quizzes`)
  const data = await response.json()

  return data
}
