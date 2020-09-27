import React from 'react'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero'

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout
        background="white"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
        isFirst={true}
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#f3f4f5"
          fillOpacity="1"
          d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,138.7C840,117,960,107,1080,112C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      {/*  */}
      <HomeAbout
        background="gray"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          fill="#f3f4f5"
          d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,128C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/*  */}
      <HomeAbout
        background="white"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
      />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="#f3f4f5"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
        ></path>
      </svg>
      {/*  */}
      <HomeAbout
        background="gray"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          fill="#f3f4f5"
          d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,128C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/*  */}
      <HomeAbout
        background="white"
        title="title"
        description="Et dolore incididunt amet nulla veniam reprehenderit magna eiusmod eiusmod ex do dolor. Ex laborum sit consectetur fugiat in sunt sunt officia reprehenderit laboris voluptate. Ex qui reprehenderit in ea culpa labore labore sint."
        button="button"
      />
    </>
  )
}

export default Home
