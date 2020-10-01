import React, { useEffect, useState } from 'react'
import AOS from 'aos'
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
  id: string
  background: 'gray' | 'white'
  imagePosition: 'left' | 'right'
  title: string
  description: string
  button: string
  isFirst?: boolean
  fadeImage: string
}

const HomeAbout: React.FC<HomeAboutProps> = ({
  id,
  background,
  title,
  description,
  imagePosition,
  button,
  isFirst,
  fadeImage
}) => {
  const addMarginTop = !isFirst ? 'mt-xs' : ''
  const isFirstContainer = isFirst ? 'first-container' : ''

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <Container className={`${background}`} id={id}>
      <Content
        className={`${imagePosition} ${addMarginTop} ${isFirstContainer}`}
      >
        <ImageContainer data-aos="fade-up">
          <Image src={image} />
        </ImageContainer>
        <InfoContainer className={imagePosition} data-aos="fade-up">
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button id={`btn-${id}`} name={button} type="button" />
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default HomeAbout
