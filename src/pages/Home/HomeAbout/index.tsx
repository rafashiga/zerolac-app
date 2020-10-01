import React, { useEffect } from 'react'
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
import { useHistory } from 'react-router-dom'

interface HomeAboutProps {
  id: string
  background: 'gray' | 'white'
  image: string
  imagePosition: 'left' | 'right'
  title: string
  description: string
  buttonLabel?: string
  buttonLink?: string
  isFirst?: boolean
}

const HomeAbout: React.FC<HomeAboutProps> = ({
  id,
  background,
  title,
  description,
  image,
  imagePosition,
  buttonLabel,
  buttonLink,
  isFirst
}) => {
  const addMarginTop = !isFirst ? 'mt-xs' : ''
  const isFirstContainer = isFirst ? 'first-container' : ''
  const history = useHistory()

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const handleNavigate = () => {
    if (buttonLink) history.push(buttonLink)
  }

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
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          {buttonLabel && (
            <Button
              id={`btn-${id}`}
              onClick={handleNavigate}
              label={buttonLabel}
              type="button"
            />
          )}
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default HomeAbout
