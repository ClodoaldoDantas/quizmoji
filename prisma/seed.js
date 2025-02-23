import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const filmes = await prisma.quiz.create({
    data: {
      title: 'Filmes',
      slug: 'filmes',
      icon: '🍿',
    },
  })

  const futebol = await prisma.quiz.create({
    data: {
      title: 'Futebol',
      slug: 'futebol',
      icon: '⚽',
    },
  })

  await prisma.question.createMany({
    data: [
      {
        quizId: filmes.id,
        prompt: '🇺🇸🍰',
        choices: JSON.stringify(['American Pie', 'Road Trip']),
        correctAnswer: 'American Pie',
      },
      {
        quizId: filmes.id,
        prompt: '👊💥🐼',
        choices: JSON.stringify(['Mulan', 'Kung Fu Panda']),
        correctAnswer: 'Kung Fu Panda',
      },
      {
        quizId: filmes.id,
        prompt: '👑🦁',
        choices: JSON.stringify(['Tarzan', 'O Rei Leão']),
        correctAnswer: 'O Rei Leão',
      },
      {
        quizId: filmes.id,
        prompt: '🐝📽️',
        choices: JSON.stringify(['Bee Movie', 'Vida de Inseto']),
        correctAnswer: 'Bee Movie',
      },
      {
        quizId: filmes.id,
        prompt: '👴💍💍',
        choices: JSON.stringify(['O Hobbit', 'O Senhor dos Anéis']),
        correctAnswer: 'O Senhor dos Anéis',
      },
      {
        quizId: futebol.id,
        prompt: '🦁',
        choices: JSON.stringify(['Fortaleza', 'Bahia']),
        correctAnswer: 'Fortaleza',
      },
      {
        quizId: futebol.id,
        prompt: '🐋',
        choices: JSON.stringify(['São Paulo', 'Santos']),
        correctAnswer: 'Santos',
      },
      {
        quizId: futebol.id,
        prompt: '🐓',
        choices: JSON.stringify(['Atlético Mineiro', 'Athletico Paranaense']),
        correctAnswer: 'Atlético Mineiro',
      },
      {
        quizId: futebol.id,
        prompt: '🍗',
        choices: JSON.stringify(['Coritiba', 'Paraná']),
        correctAnswer: 'Coritiba',
      },
      {
        quizId: futebol.id,
        prompt: '🐯',
        choices: JSON.stringify(['Joinville', 'Criciúma']),
        correctAnswer: 'Criciúma',
      },
    ],
  })

  console.log('🌱 Database has been seeded')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
