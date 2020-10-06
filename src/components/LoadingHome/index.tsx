import React from 'react'

import { Container, Skeleton } from './styles'

const LoadingHome: React.FC = () => {
  return (
    <Container>
      <Skeleton className="image-loading" />
      <div className="info-container">
        <Skeleton className="title-loading" />
        <Skeleton className="text-loading" />
        <Skeleton className="text-loading" />
        <Skeleton className="text-loading" />
      </div>
    </Container>
  )
}

export default LoadingHome
