import coffee from './assets/coffee.png'
import todo from './assets/todo.png'

export const projectsData = [
  {
    id: 1,
    image: coffee,
    title: 'Coffee Delivery',
    smallDescription: 'Loja virtual',
    tags: ['ReactJS', 'TypeScript'],
    fullDescription:
      'Loja virtual - cafeteria - com recursos de compra online, possibilidade de navegar pela loja, adicionar produtos ao ao carrinho, alterar quantidade, remover itens do carrinho e finalizar pedido informando endereço de entraga e forma de pagamento',
    deploy: 'https://raimones-coffee-delivery.vercel.app',
    repository: 'https://github.com/raimonesbarros/coffee-delivery',
  },
  {
    id: 2,
    image: todo,
    title: 'To Do',
    smallDescription: 'Lista de Tarefas',
    tags: ['ReactJS', 'TypeScript'],
    fullDescription:
      'Lista de tarefas - A fazeres - com recursos de criar tarefas, marcar e desmarcar como concluídas, deletar, ver status de quantidade total de tarefas e quantidade de tarefas concluídas',
    deploy: 'https://raimones-to-do.vercel.app',
    repository: 'https://github.com/raimonesbarros/to-do',
  },
]
