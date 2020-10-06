import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'
import { useHistory, useParams } from 'react-router-dom'

import RingLoader from 'react-spinners/RingLoader'

import notFoundImg from '../../assets/image/not_found.svg'

import api from '../../services/api'

import {
  Container,
  Title,
  Image,
  Message,
  Markdown,
  MessageContainer,
  MessageImage,
  LoadingContainer
} from './styles'
import Button from '../../components/Button'

interface UrlParams {
  id: string
}

interface Data {
  title: string
  bannerImage: any
  longDescription: string
}

const Detail: React.FC = () => {
  let { id } = useParams<UrlParams>()
  const [item, setItem] = useState({} as Data)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const loadingCss = css`
    display: block;
    margin: 0 auto;
  `

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setLoading(true)
    api
      .get('zerolacs', {
        params: {
          name: id
        }
      })
      .then(response => {
        setItem(response.data[0])
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }, [id])

  const goBack = () => {
    history.push('/')
  }

  return (
    <>
      {loading && (
        <LoadingContainer>
          <RingLoader
            size={120}
            color={'#25BCF7'}
            css={loadingCss}
            loading={loading}
          />
          <Message>Carregando...</Message>
        </LoadingContainer>
      )}

      {item ? (
        <>
          <Image backgroundImage={item.bannerImage?.formats.large.url} />
          <Container>
            <Title>{item.title}​</Title>
            {/* <Text dangerouslySetInnerHTML={{ __html: item.longDescription }} /> */}
            <Markdown source={item.longDescription} />
          </Container>
        </>
      ) : (
        <MessageContainer>
          <MessageImage src={notFoundImg} />
          <Message>Conteúdo não econtrado</Message>
          <Button label="voltar" onClick={goBack} type="button" />
        </MessageContainer>
      )}
    </>
  )
}

export default Detail
