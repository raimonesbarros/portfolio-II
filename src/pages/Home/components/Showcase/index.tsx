import { CaretDown } from '@phosphor-icons/react'
import {
  ShowcaseContainer,
  ShowcaseContent,
  ShowcaseDescription,
  Strong,
} from './styles'

export function Showcase() {
  return (
    <ShowcaseContainer>
      <ShowcaseContent>
        <ShowcaseDescription>
          <p>Meu nome é</p>
          <p>
            <Strong>Raimones,</Strong>
          </p>
          <p>eu sou</p>
          <p>
            <Strong>Desenvolvedor</Strong>
          </p>
          <p>e esse é meu portfólio</p>
          <p>
            <Strong>Front-end.</Strong>
          </p>
        </ShowcaseDescription>
        <CaretDown size={40} />
      </ShowcaseContent>
    </ShowcaseContainer>
  )
}
