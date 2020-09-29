import React from 'react'
import Button from '../../../components/Button'

import { Container, Content, InfoContainer, Title, Description } from './styles'

const HomeHero: React.FC = () => {
  return (
    <Container id="inicio">
      <Content>
        <InfoContainer>
          <Title>Zerolac</Title>
          <Description>
            Saiba mais sobre os Leites Zero Lactose, descubra como ele é
            produzido na indústria.​ Entenda a diferença entre os tipos de
            intolêrancias. Descubra como interpretar os rótulos.
          </Description>
          <Button name="saiba mais" type="button" />
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default HomeHero
