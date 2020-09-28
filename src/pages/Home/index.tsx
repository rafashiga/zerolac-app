import React from 'react'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero'

import { WaveTop, WaveBottom } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout
        background="white"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        imagePosition="left"
        button="button"
        isFirst={true}
      />
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
      {/*  */}
      <HomeAbout
        background="gray"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
        imagePosition="right"
      />
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
      {/*  */}
      <HomeAbout
        background="white"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
        imagePosition="left"
      />
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
      {/*  */}
      <HomeAbout
        background="gray"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
        imagePosition="right"
      />
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
      {/*  */}
      <HomeAbout
        background="white"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
        imagePosition="left"
      />
    </>
  )
}

export default Home
