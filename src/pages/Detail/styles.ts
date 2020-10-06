import ReactMarkdown from 'react-markdown'
import { rem } from 'polished'
import styled from 'styled-components'
import RingLoader from 'react-spinners/RingLoader'

type ImageDiv = {
  backgroundImage: string
}

export const Image = styled.div<ImageDiv>`
  width: 100%;
  height: ${rem(300)};
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`

export const LoadingContainer = styled.div`
  padding-top: ${rem(200)};
  margin: 0 auto;
  text-align: center;
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

export const Markdown = styled(ReactMarkdown)`
  line-height: 1.75rem;

  img {
    max-width: ${rem(400)};
    display: block;
    margin: 2rem auto;
  }
`

export const MessageContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: ${rem(200)};
  text-align: center;
  height: 81vh;
`

export const MessageImage = styled.img`
  width: ${rem(250)};
`

export const Message = styled.h1`
  margin: 2rem 0;
`
