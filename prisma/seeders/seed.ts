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
          description:
            '<p>O iPhone é um smartphone desenvolvido pela <a href="https://www.apple.com/br/" target="_blank">Apple Inc.</a> Ele é conhecido por sua elegância, design sofisticado e tecnologia de ponta. Abaixo estão algumas das características do iPhone:</p><ul><li><strong>Tela:</strong> O iPhone possui uma tela de alta resolução com cores vibrantes.</li><li><strong>Câmera:</strong> Possui uma câmera de alta qualidade para capturar fotos e vídeos incríveis.</li><li><strong>Desempenho:</strong> Equipado com um poderoso processador para executar aplicativos rapidamente.</li><li><strong>Sistema Operacional:</strong> Executa o sistema operacional iOS, conhecido por sua estabilidade e segurança.</li><li><strong>Armazenamento:</strong> Disponível em várias capacidades de armazenamento para atender às necessidades dos usuários.</li></ul><p>Se você procura um smartphone confiável e repleto de recursos, o iPhone é uma excelente escolha.</p><footer><p>Para obter mais informações, visite o <a href="https://www.apple.com/br/iphone/" target="_blank">site oficial do iPhone</a>.</p></footer>',
          image:
            'https://img.freepik.com/fotos-gratis/composicao-elegante-de-smartphone_23-2149437106.jpg?size=626&ext=jpg&ga=GA1.2.761695295.1696214054&semt=sph',
        },
        {
          name: 'iPhone 13s ',
          code: 'iphone-13s',
          price: 2299.99,
          description:
            '<p>O iPhone é um smartphone desenvolvido pela <a href="https://www.apple.com/br/" target="_blank">Apple Inc.</a> Ele é conhecido por sua elegância, design sofisticado e tecnologia de ponta. Abaixo estão algumas das características do iPhone:</p><ul><li><strong>Tela:</strong> O iPhone possui uma tela de alta resolução com cores vibrantes.</li><li><strong>Câmera:</strong> Possui uma câmera de alta qualidade para capturar fotos e vídeos incríveis.</li><li><strong>Desempenho:</strong> Equipado com um poderoso processador para executar aplicativos rapidamente.</li><li><strong>Sistema Operacional:</strong> Executa o sistema operacional iOS, conhecido por sua estabilidade e segurança.</li><li><strong>Armazenamento:</strong> Disponível em várias capacidades de armazenamento para atender às necessidades dos usuários.</li></ul><p>Se você procura um smartphone confiável e repleto de recursos, o iPhone é uma excelente escolha.</p><footer><p>Para obter mais informações, visite o <a href="https://www.apple.com/br/iphone/" target="_blank">site oficial do iPhone</a>.</p></footer>',
          image:
            'https://img.freepik.com/fotos-gratis/composicao-de-bobinas-criativas_23-2149711507.jpg',
        },
        {
          name: 'iPhone 14',
          code: 'iphone-14',
          price: 3039.99,
          description:
            '<p>O iPhone é um smartphone desenvolvido pela <a href="https://www.apple.com/br/" target="_blank">Apple Inc.</a> Ele é conhecido por sua elegância, design sofisticado e tecnologia de ponta. Abaixo estão algumas das características do iPhone:</p><ul><li><strong>Tela:</strong> O iPhone possui uma tela de alta resolução com cores vibrantes.</li><li><strong>Câmera:</strong> Possui uma câmera de alta qualidade para capturar fotos e vídeos incríveis.</li><li><strong>Desempenho:</strong> Equipado com um poderoso processador para executar aplicativos rapidamente.</li><li><strong>Sistema Operacional:</strong> Executa o sistema operacional iOS, conhecido por sua estabilidade e segurança.</li><li><strong>Armazenamento:</strong> Disponível em várias capacidades de armazenamento para atender às necessidades dos usuários.</li></ul><p>Se você procura um smartphone confiável e repleto de recursos, o iPhone é uma excelente escolha.</p><footer><p>Para obter mais informações, visite o <a href="https://www.apple.com/br/iphone/" target="_blank">site oficial do iPhone</a>.</p></footer>',
          image:
            'https://img.freepik.com/fotos-gratis/balanceamento-de-smartphone-com-fundo-rosa_23-2150271746.jpg?size=626&ext=jpg&ga=GA1.2.761695295.1696214054&semt=sph',
        },
        {
          name: 'iPhone 14 pro',
          code: 'iphone-14-pro',
          price: 3490.99,
          description:
            '<p>O iPhone é um smartphone desenvolvido pela <a href="https://www.apple.com/br/" target="_blank">Apple Inc.</a> Ele é conhecido por sua elegância, design sofisticado e tecnologia de ponta. Abaixo estão algumas das características do iPhone:</p><ul><li><strong>Tela:</strong> O iPhone possui uma tela de alta resolução com cores vibrantes.</li><li><strong>Câmera:</strong> Possui uma câmera de alta qualidade para capturar fotos e vídeos incríveis.</li><li><strong>Desempenho:</strong> Equipado com um poderoso processador para executar aplicativos rapidamente.</li><li><strong>Sistema Operacional:</strong> Executa o sistema operacional iOS, conhecido por sua estabilidade e segurança.</li><li><strong>Armazenamento:</strong> Disponível em várias capacidades de armazenamento para atender às necessidades dos usuários.</li></ul><p>Se você procura um smartphone confiável e repleto de recursos, o iPhone é uma excelente escolha.</p><footer><p>Para obter mais informações, visite o <a href="https://www.apple.com/br/iphone/" target="_blank">site oficial do iPhone</a>.</p></footer>',
          image:
            'https://img.freepik.com/fotos-gratis/vista-do-balanceamento-de-produtos-eletronicos-no-podio_23-2150141321.jpg?size=626&ext=jpg&ga=GA1.1.761695295.1696214054&semt=sph',
        },
        {
          name: 'iPhone 15',
          code: 'iphone-15',
          price: 3959.99,
          description:
            '<p>O iPhone é um smartphone desenvolvido pela <a href="https://www.apple.com/br/" target="_blank">Apple Inc.</a> Ele é conhecido por sua elegância, design sofisticado e tecnologia de ponta. Abaixo estão algumas das características do iPhone:</p><ul><li><strong>Tela:</strong> O iPhone possui uma tela de alta resolução com cores vibrantes.</li><li><strong>Câmera:</strong> Possui uma câmera de alta qualidade para capturar fotos e vídeos incríveis.</li><li><strong>Desempenho:</strong> Equipado com um poderoso processador para executar aplicativos rapidamente.</li><li><strong>Sistema Operacional:</strong> Executa o sistema operacional iOS, conhecido por sua estabilidade e segurança.</li><li><strong>Armazenamento:</strong> Disponível em várias capacidades de armazenamento para atender às necessidades dos usuários.</li></ul><p>Se você procura um smartphone confiável e repleto de recursos, o iPhone é uma excelente escolha.</p><footer><p>Para obter mais informações, visite o <a href="https://www.apple.com/br/iphone/" target="_blank">site oficial do iPhone</a>.</p></footer>',
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
