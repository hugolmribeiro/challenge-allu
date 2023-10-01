import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.product.createMany({
      data: [
        {
          name: 'iPhone 13',
          code: 'iphone-13',
          price: 1999.99,
          description: 'Descrição do iPhone',
          image:
            'https://drive.google.com/file/d/1gG--c5_95cOiyraY99Mc5cKs__zx4OsF/view?usp=sharing',
        },
        {
          name: 'iPhone 13s ',
          code: 'iphone-13s',
          price: 2299.99,
          description: 'Descrição do iPhone 13s ',
          image:
            'https://drive.google.com/file/d/1gG--c5_95cOiyraY99Mc5cKs__zx4OsF/view?usp=sharing',
        },
        {
          name: 'iPhone 14',
          code: 'iphone-14',
          price: 3039.99,
          description: 'Descrição do iPhone 14',
          image:
            'https://drive.google.com/file/d/1gG--c5_95cOiyraY99Mc5cKs__zx4OsF/view?usp=sharing',
        },
        {
          name: 'iPhone 14 pro',
          code: 'iphone-14-pro',
          price: 3490.99,
          description: 'Descrição do iPhone 14 pro',
          image:
            'https://drive.google.com/file/d/1gG--c5_95cOiyraY99Mc5cKs__zx4OsF/view?usp=sharing',
        },
        {
          name: 'iPhone 15',
          code: 'iphone-15',
          price: 3959.99,
          description: 'Descrição do iPhone 15',
          image:
            'https://drive.google.com/file/d/1gG--c5_95cOiyraY99Mc5cKs__zx4OsF/view?usp=sharing',
        },
      ],
    });

    console.log('Dados de produtos inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir dados de produtos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
