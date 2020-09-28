import React from 'react'
import Button from '../../../components/Button'

import {
  Container,
  Content,
  InfoContainer,
  Title,
  Description,
  ImageContainer,
  Image
} from './styles'

import image from '../../../assets/image/image.jpg'

interface HomeAboutProps {
  background: 'gray' | 'white'
  imagePosition: 'left' | 'right'
  title: string
  description: string
  button: string
  isFirst?: boolean
}

const HomeAbout: React.FC<HomeAboutProps> = ({
  background,
  title,
  description,
  imagePosition,
  button,
  isFirst
}) => {
  const addMarginTop = !isFirst ? 'mt-xs' : ''
  const isFirstContainer = isFirst ? 'first-container' : ''

  return (
    <Container className={`${background}`}>
      <Content
        className={`${imagePosition} ${addMarginTop} ${isFirstContainer}`}
      >
        <InfoContainer className={imagePosition}>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button name={button} type="button" />
        </InfoContainer>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default HomeAbout
