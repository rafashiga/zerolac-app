import React from 'react'

import {
  Container,
  Content,
  InfoContainer,
  Title,
  Description,
  Link
} from './styles'

interface Props {
  description: string
}

const HomeHero: React.FC<Props> = ({ description }) => {
  return (
    <Container id="inicio">
      <Content>
        <InfoContainer>
          <Title>Zerolac</Title>
          <Description>{description}</Description>
          <Link to="/#apresentacao">Saiba mais</Link>
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default HomeHero
