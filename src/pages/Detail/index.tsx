import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import api from '../../services/api'

import { Container, Title, Text, Image, Message } from './styles'

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

  return (
    <>
      {loading && <Message> Loading... </Message>}
      {item ? (
        <>
          <Image backgroundImage={item.bannerImage?.formats.large.url} />
          <Container>
            <Title>{item.title}​</Title>
            <Text dangerouslySetInnerHTML={{ __html: item.longDescription }} />
          </Container>
        </>
      ) : (
        <Message> Conteúdo não foi encontrado </Message>
      )}
    </>
  )
}

export default Detail
