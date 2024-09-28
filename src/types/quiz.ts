export type Question = {
  prompt: string
  choices: string[]
  correctAnswer: string
}

export type Quiz = {
  title: string
  icon: string
  slug: string
  questions: Question[]
}
