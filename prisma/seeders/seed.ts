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
            'https://img.freepik.com/fotos-gratis/composicao-elegante-de-smartphone_23-2149437106.jpg?size=626&ext=jpg&ga=GA1.2.761695295.1696214054&semt=sph',
        },
        {
          name: 'iPhone 13s ',
          code: 'iphone-13s',
          price: 2299.99,
          description: 'Descrição do iPhone 13s ',
          image:
            'https://img.freepik.com/fotos-gratis/composicao-de-bobinas-criativas_23-2149711507.jpg',
        },
        {
          name: 'iPhone 14',
          code: 'iphone-14',
          price: 3039.99,
          description: 'Descrição do iPhone 14',
          image:
            'https://img.freepik.com/fotos-gratis/balanceamento-de-smartphone-com-fundo-rosa_23-2150271746.jpg?size=626&ext=jpg&ga=GA1.2.761695295.1696214054&semt=sph',
        },
        {
          name: 'iPhone 14 pro',
          code: 'iphone-14-pro',
          price: 3490.99,
          description: 'Descrição do iPhone 14 pro',
          image:
            'https://img.freepik.com/fotos-gratis/vista-do-balanceamento-de-produtos-eletronicos-no-podio_23-2150141321.jpg?size=626&ext=jpg&ga=GA1.1.761695295.1696214054&semt=sph',
        },
        {
          name: 'iPhone 15',
          code: 'iphone-15',
          price: 3959.99,
          description: 'Descrição do iPhone 15',
          image:
            'https://img.freepik.com/fotos-gratis/balanceamento-de-smartphone-com-fundo-violeta_23-2150271744.jpg?size=626&ext=jpg&ga=GA1.1.761695295.1696214054&semt=sph',
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
