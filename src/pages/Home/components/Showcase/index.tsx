import { CaretDown } from '@phosphor-icons/react'
import dummy from '../../../../assets/dummy.png'
import {
  ShowcaseSection,
  ShowcaseContainer,
  ShowcaseDescription,
  Strong,
} from './styles'

export function Showcase() {
  return (
    <ShowcaseSection id="showcase">
      <ShowcaseContainer>
        <img src={dummy} alt="" />
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
      </ShowcaseContainer>
    </ShowcaseSection>
  )
}
