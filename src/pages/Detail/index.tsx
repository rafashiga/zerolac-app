import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { data } from '../../data/data'

import { Container, Title, Text, Image } from './styles'

interface UrlParams {
  id: string
}

interface Data {
  title: string
  image: string
  description: string
}

const Detail: React.FC = () => {
  let { id } = useParams<UrlParams>()
  const [item, setItem] = useState({} as Data)
  const history = useHistory()

  useEffect(() => {
    const [dataFiltered] = data.filter(register => id === register.id)
    if (dataFiltered) {
      setItem(dataFiltered)
    } else {
      history.push('/')
    }
  }, [history, id])

  return (
    <>
      <Image backgroundImage={item.image} />
      <Container>
        <Title>{item.title}​</Title>
        <Text>{item.description}</Text>
      </Container>
    </>
  )
}

export default Detail
