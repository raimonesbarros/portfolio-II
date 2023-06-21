import { ProjectContainer, ProjectInfo } from './Project.styles'
import img from '../../assets/coffee.png'

export function Project() {
  return (
    <ProjectContainer>
      <img src={img} alt="" />
      <ProjectInfo>
        <h3>Coffee Delivery</h3>
        <p>Loja virtual</p>
        <div>
          <span>reactJS</span>
          <span>typescript</span>
        </div>
      </ProjectInfo>
    </ProjectContainer>
  )
}
