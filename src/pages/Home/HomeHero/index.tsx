import React from 'react'

import {
  Container,
  Content,
  InfoContainer,
  Title,
  Description,
  Link
} from './styles'

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
          <Link to="/#apresentacao">Saiba mais</Link>
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default HomeHero
