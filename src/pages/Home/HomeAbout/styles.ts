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
  width: 90%;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  &.mt-xs {
    margin-top: -1rem;
  }

  &.first-container {
    padding-top: ${rem(50)};
  }

  @media (min-width: 900px) {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.right {
      flex-direction: row-reverse;
    }

    &.left {
      flex-direction: row;
    }

    &.first-container {
      padding-top: ${rem(120)};
    }
  }
`

export const InfoContainer = styled.div`
  width: 50%;

  @media (min-width: 900px) {
    &.right {
      margin-right: 3rem;
    }

    &.left {
      margin-left: 3rem;
    }
  }
`

export const Title = styled.h2`
  font-size: 42px;
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

export const ImageContainer = styled.div`
  width: ${rem(250)};
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    width: ${rem(400)};
    margin: 0;
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 2px 4px #000000;
`
