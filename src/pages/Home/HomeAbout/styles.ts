import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  &.gray {
    background: #f3f4f5;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: ${rem(120)};
  padding-bottom: ${rem(20)};

  &.mt-xs {
    margin-top: -1rem;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  font-size: 32px;
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

export const ImageContainer = styled.div``

export const Image = styled.img``
