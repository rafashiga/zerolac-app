import styled from 'styled-components'
import heroImage from '../../../assets/image/hero.jpg'

export const Container = styled.div`
  height: 80vh;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #000;

  @media (max-width: 400px) {
    background-size: 100vh;
  }

  @media (min-width: 900px) {
    background-image: linear-gradient(to right, #000 10%, transparent 80%),
      url(${heroImage});
    background-repeat: no-repeat;
    background-size: 100vh;
    background-position: right;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const InfoContainer = styled.div`
  width: 450px;
`

export const Title = styled.h2`
  font-size: 48px;
`

export const Description = styled.h3`
  font-weight: 300;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    font-size: 1.25rem;
  }
`
