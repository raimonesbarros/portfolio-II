import { Buttons, ViewerContainer, ViewerContent } from './styles'
import coffee from '../../../../assets/coffee.png'

export function Viewer() {
  return (
    <ViewerContainer>
      <ViewerContent>
        <img src={coffee} alt="" />
        <Buttons>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Ver mais
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Projeto
          </a>
        </Buttons>
        <h2>Coffee Delivery</h2>
        <div>
          <span>reactJS</span>
        </div>
        <p>
          Aplicação de loja virtual - cafeteria - simulando compra online com
          possibilidade de navegar pela loja, adicionar produtos ao ao carrinho,
          alterar quantidade, remover itens do carrinho e finalizar pedido
          informando endereço de entrega e forma de pagamento
        </p>
      </ViewerContent>
    </ViewerContainer>
  )
}
