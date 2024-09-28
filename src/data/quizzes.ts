import type { Quiz } from '@/types/quiz'

export const quizzes: Quiz[] = [
  {
    title: 'Filmes',
    icon: '🍿',
    slug: 'filmes',
    questions: [
      {
        prompt: '🇺🇸🍰',
        choices: ['American Pie', 'Road Trip'],
        correctAnswer: 'American Pie',
      },
      {
        prompt: '👊💥🐼',
        choices: ['Mulan', 'Kung Fu Panda'],
        correctAnswer: 'Kung Fu Panda',
      },
      {
        prompt: '👑🦁',
        choices: ['Tarzan', 'O Rei Leão'],
        correctAnswer: 'O Rei Leão',
      },
      {
        prompt: '🐝📽️',
        choices: ['Bee Movie', 'Vida de Inseto'],
        correctAnswer: 'Bee Movie',
      },
      {
        prompt: '👴💍💍',
        choices: ['O Hobbit', 'O Senhor dos Anéis'],
        correctAnswer: 'O Senhor dos Anéis',
      },
    ],
  },
  {
    title: 'Músicas',
    icon: '🎵',
    slug: 'musicas',
    questions: [],
  },
  {
    title: 'Futebol',
    icon: '⚽',
    slug: 'futebol',
    questions: [],
  },
]
