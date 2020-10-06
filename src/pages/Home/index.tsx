import React, { useEffect, useState } from 'react'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero'

import api from '../../services/api'

import { WaveTop, WaveBottom } from './styles'

import LoadingHome from '../../components/LoadingHome'

interface Data {
  id: number
  order: number
  title: string
  name: string
  shortDescription: string
  longDescription: string
  mainImage: any
  bannerImage: any
}

const Home: React.FC = () => {
  const [data, setData] = useState([] as Data[])
  const [inicioData, setInicioData] = useState({} as Data)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    api
      .get('/zerolacs?_sort=order:ASC')
      .then(response => {
        setData(response.data)
        const [inicio] = response.data.filter((item: Data) => item.order === 1)
        setInicioData(inicio)

        const zerolacData = response.data.filter(
          (item: Data) => item.order !== 1
        )
        setData(zerolacData)
        setloading(false)
      })
      .catch(error => setloading(false))
  }, [])

  const isOdd = (order: number) => {
    const result = order % 2
    return result === 1 ? true : false
  }

  const removeAccents = (text: string) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const checkIsLastItem = (id: number) => {
    return data.length + 1 !== id
  }

  return (
    <>
      <HomeHero description={inicioData.shortDescription} />
      {loading && <LoadingHome />}
      {!loading &&
        data &&
        data.map((item: Data) => (
          <div key={item.order}>
            {isOdd(item.order) && (
              <WaveTop
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
              >
                <path
                  fill="#f3f4f5"
                  d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                ></path>
              </WaveTop>
            )}
            <HomeAbout
              id={removeAccents(item.name).toLowerCase()}
              background={isOdd(item.order) ? 'gray' : 'white'}
              title={item.title}
              description={item.shortDescription}
              buttonLabel={item.longDescription ? 'saiba mais' : ''}
              buttonLink={`/detail/${item.name}`}
              image={item.mainImage?.formats.large.url}
              imagePosition={isOdd(item.order) ? 'right' : 'left'}
            />

            {checkIsLastItem(item.id)
              ? isOdd(item.order) && (
                  <WaveBottom
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 240"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="#f3f4f5"
                      d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,128C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                  </WaveBottom>
                )
              : null}
          </div>
        ))}
    </>
  )
}

export default Home
