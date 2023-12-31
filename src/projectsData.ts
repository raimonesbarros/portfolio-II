import mascote from './assets/mascote.png'
import cordel from './assets/cordel.png'
import abrigo from './assets/abrigo.png'
import igloo from './assets/igloo.png'
import velha from './assets/velha.png'
import calculadora from './assets/calculadora.png'
import imc from './assets/imc.png'
import dev from './assets/dev.png'
import portfolio from './assets/portfolio.png'
import keyboard from './assets/keyboard.png'
import igloo2 from './assets/igloo2.png'
import social from './assets/social.png'
import timer from './assets/timer.png'
import dt from './assets/dt.png'
import todo from './assets/todo.png'
import coffee from './assets/coffee.png'
import blog from './assets/blog.png'

export const projectsData = [
  {
    id: 17,
    image: blog,
    title: 'Github Blog',
    smallDescription: 'Blog',
    tags: ['ReactJS', 'TypeScript', '+libs'],
    fullDescription:
      'Blog pessoal criada usando API do Github e utilizando as issues como posts, abordando componentização, estados, contexto, requisição de API, paginação por rotas dinâmicas, manipulação de dados estilos com Styled-components',
    deploy: 'https://raimones-github-blog.vercel.app',
    repository: 'https://github.com/raimonesbarros/github-blog',
  },
  {
    id: 16,
    image: coffee,
    title: 'Coffee Delivery',
    smallDescription: 'Loja virtual',
    tags: ['ReactJS', 'TypeScript', '+libs'],
    fullDescription:
      'Loja virtual com recursos de compra online, possibilidade de navegar pela loja, adicionar e remover produtos do carrinho, alterar quantidade e finalizar pedido informando endereço de entrega e forma de pagamento.',
    deploy: 'https://raimones-coffee-delivery.vercel.app',
    repository: 'https://github.com/raimonesbarros/coffee-delivery',
  },
  {
    id: 15,
    image: todo,
    title: 'To Do',
    smallDescription: 'Lista de Tarefas',
    tags: ['ReactJS', 'TypeScript', '+libs'],
    fullDescription:
      'Lista de tarefas com recursos de criar tarefa, marcar e desmarcar como concluídas, deletar, ver status de quantidade total de tarefas e quantidade de tarefas concluídas',
    deploy: 'https://raimones-to-do.vercel.app',
    repository: 'https://github.com/raimonesbarros/to-do',
  },
  {
    id: 14,
    image: dt,
    title: 'DT Money',
    smallDescription: 'Gestão Financeira',
    tags: ['ReactJS', 'TypeScript', '+libs'],
    fullDescription:
      'Aplicação online de gestão financeira criada no curso de ReactJS e Typescript, abordando componentização, estados, contexto, requisição de API, manipulação de dados estilos com Styled-components',
    deploy: 'https://raimones-dt-money.vercel.app/',
    repository: 'https://github.com/raimonesbarros/Timer',
  },
  {
    id: 13,
    image: timer,
    title: 'Timer',
    smallDescription: 'Pomodoro',
    tags: ['ReactJS', 'TypeScript', '+libs'],
    fullDescription:
      'Aplicação online da tecnica de Pomodoro criada no curso de ReactJS e Typescript, abordando componentização, estados, contexto, estilos com Styled-components, paginação por rotas',
    deploy: 'https://raimones-timer.vercel.app/',
    repository: 'https://github.com/raimonesbarros/Timer',
  },
  {
    id: 12,
    image: social,
    title: 'Social Feed',
    smallDescription: 'Rede social',
    tags: ['ReactJS', 'CSS', 'TypeScript', '+libs'],
    fullDescription:
      'Página simulando feed de rede social criada no curso de ReactJS e Typescript, abordando os fundamentos, estrutura, componentização, estilos com CSS modules',
    deploy: 'https://raimones-social-feed.vercel.app/',
    repository: 'https://github.com/raimonesbarros/social-feed',
  },
  {
    id: 11,
    image: igloo2,
    title: 'Igloo II',
    smallDescription: 'Sorveteria',
    tags: ['HTML', 'CSS', 'JavaScript'],
    fullDescription:
      'Recriando uma das primeiras páginas desenvolvidas por mim. Página de divulgação do empreendimento da minha irmã, @igloosorveteria no instagram!',
    deploy: 'https://raimonesbarros.github.io/igloo-sorveteria/',
    repository: 'https://github.com/raimonesbarros/igloo-sorveteria',
  },
  {
    id: 10,
    image: keyboard,
    title: 'Learn Keyboard',
    smallDescription: 'Curso Online',
    tags: ['HTML', 'CSS', 'JavaScript'],
    fullDescription:
      'Aplicação pessoal para aprender a tocar teclado e praticar conhecimentos de desenvolvimento web simultaneamente',
    deploy: 'https://raimonesbarros.github.io/aprenda-teclado-musical/',
    repository: 'https://github.com/raimonesbarros/aprenda-teclado-musical',
  },
  {
    id: 9,
    image: portfolio,
    title: '</RSB>',
    smallDescription: 'Portfólio',
    tags: ['HTML', 'CSS', 'JavaScript'],
    fullDescription:
      'Site desenvolvido para divulgação profissional dos projetos desenvolvidos com as tecnologias estudadas e conhecimentos adquidos',
    deploy: 'https://raimonesbarros.github.io/portfolio/',
    repository: 'https://github.com/raimonesbarros/portfolio',
  },
  {
    id: 8,
    image: dev,
    title: 'Dev fora da caixa',
    smallDescription: 'Escola de tecnologia',
    tags: ['HTML', 'CSS', 'JavaScript'],
    fullDescription:
      'Projeto de site dinâmico, para fins de prática de conteúdos e aperfeiçoamento de técnicas, com foco em Programação Orientada a Objetos, aboradando convenções, permanência e manipulação de dados',
    deploy: 'https://raimonesbarros.github.io/dev-fora-da-caixa/',
    repository: 'https://github.com/raimonesbarros/dev-fora-da-caixa',
  },
  {
    id: 7,
    image: imc,
    title: 'IMC online',
    smallDescription: 'Calculadora de IMC',
    tags: ['HTML', 'CSS', 'JavaScript'],
    fullDescription:
      'Aplicação dinâmica, para fins de prática de conteúdos e aperfeiçoamento de técnicas, com foco em Programação Orientada a Objetos, aboradando convenções, permanência e manipulação de dados',
    deploy: 'https://raimonesbarros.github.io/Calculadora-de-IMC/',
    repository: 'https://github.com/raimonesbarros/Calculadora-de-IMC',
  },
  {
    id: 6,
    image: calculadora,
    title: 'Calculadora',
    smallDescription: 'Calculadora online',
    tags: ['HTML', 'CSS', 'JavaScript'],
    fullDescription:
      'Ferramenta desenvolvida para praticar conceitos de regras de negócios utilizando Javascript e desenvolver habilidades para uso de linguagem de programação',
    deploy: 'https://raimonesbarros.github.io/Calculadora/',
    repository: 'https://github.com/raimonesbarros/Calculadora',
  },
  {
    id: 5,
    image: velha,
    title: 'Jogo da velha',
    smallDescription: 'Jogo online',
    tags: ['HTML', 'CSS', 'JavaScript'],
    fullDescription:
      'Jogo desenvolvido para praticar conteúdos dos cursos de Javascript estudados e desenvolver habilidades para uso de linguagem de programação',
    deploy: 'https://raimonesbarros.github.io/Jogo-da-velha/',
    repository: 'https://github.com/raimonesbarros/Jogo-da-velha',
  },
  {
    id: 4,
    image: igloo,
    title: 'Igloo',
    smallDescription: 'Sorveteria',
    tags: ['HTML', 'CSS'],
    fullDescription:
      'Página estática de criação própria para divulgar uma loja física buscando desenvolver habilidades e praticar conteúdos dos cursos estudados até o momento',
    deploy: 'https://raimonesbarros.github.io/igloo/',
    repository: 'https://github.com/raimonesbarros/igloo',
  },
  {
    id: 3,
    image: abrigo,
    title: 'Abrigo Amigo',
    smallDescription: 'Abrigo de animais',
    tags: ['HTML', 'CSS'],
    fullDescription:
      'Template de site de abrigo de animais desenvolvido para fins de prática de conteúdo abordando semântica HTML, estilos de layout, estrutura responsiva com CSS',
    deploy: 'https://raimonesbarros.github.io/abrigo-amigo/',
    repository: 'https://github.com/raimonesbarros/abrigo-amigo',
  },
  {
    id: 2,
    image: cordel,
    title: 'Cordel',
    smallDescription: 'Sarau Digital',
    tags: ['HTML', 'CSS'],
    fullDescription:
      'Página estática simulando uma página de um sarau digital com um poema, criada no curso de HTML e CSS do Curso em Vídeo, abordando possibilidades de uso de CSS, com efeito paralax de exemplo',
    deploy: 'https://raimonesbarros.github.io/Cordel/',
    repository: 'https://github.com/raimonesbarros/Cordel',
  },
  {
    id: 1,
    image: mascote,
    title: 'Mascote Android',
    smallDescription: 'Post de Blog',
    tags: ['HTML', 'CSS'],
    fullDescription:
      'Página estática simulando uma publicação em um blog de Tecnologia, criada no curso de HTML e CSS do Curso em Vídeo, abordando a semântica de hiper-textos',
    deploy: 'https://raimonesbarros.github.io/mascote-android/',
    repository: 'https://github.com/raimonesbarros/masdote-android',
  },
]
