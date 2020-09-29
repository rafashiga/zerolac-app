import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${rem(100)};
  width: 100%;
  background: #000;
  color: #fff;
`

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: ${rem(80)};
  display: flex;
  align-items: center;

  @media (min-width: 900px) {
    width: 70%;
  }
`
