import { rem } from 'polished'
import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  height: ${rem(300)};
  background: #000;
`

export const Container = styled.div`
  padding-top: ${rem(80)};
  min-height: ${rem(500)};
  margin: 0 auto;
  width: 65%;
`

export const Title = styled.h1`
  margin-bottom: 3rem;
`

export const Text = styled.p`
  line-height: 1.75rem;
`
