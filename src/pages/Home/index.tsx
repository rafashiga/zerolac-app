import React from 'react'
import HomeAbout from './HomeAbout'
import HomeHero from './HomeHero'

import { WaveTop, WaveBottom } from './styles'

import intoleranciaImage from '../../assets/image/intolerancia.jpg'
import milkImage from '../../assets/image/milk.jpg'
import rotuloImage from '../../assets/image/rotulo.jpg'

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout
        id="sobre"
        background="white"
        title="Apresentação"
        description={`Olá! Sou a Beatriz Shiga. Muito prazer!​ <br> <br>
          Estou graduando em Engenharia Bioquímica pela Universidade de São Paulo. Sou intolerante a lactose faz 3 anos. 
          Como parte do meu projeto de Trabalho de Conclusão de curso, este site foi desenvolvido com o objetivo de 
          divulgar de forma simples diversars informações 
          que vão desde a composição do leite até leite deslactosado disponível nos supermercados.​
        `}
        image={intoleranciaImage}
        imagePosition="left"
        button="button"
        isFirst={true}
        fadeImage="fade-right"
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
        id="sobre2"
        background="gray"
        title="Leite"
        description={`
          O leite é considerado um dos alimentos mais completos. ​
          É constituído de água, proteínas, carboidratos, gorduras, sais minerais e vitaminas. 
        `}
        button="saiba mais"
        image={milkImage}
        imagePosition="right"
        fadeImage="fade-left"
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
        id="sobre3"
        background="white"
        title="Intolerância a Lactose"
        description={`
          Cerca de 35% da população brasileira acima de 16 anos possui dificuldade em digerir a lactose existente no leite e seus derivados. 
          A deficiência da lactase acomete 80 a 100% dos índios americanos e asiáticos. Existem três tipos de intolerância a lactose. 
        `}
        button="saiba mais"
        image={intoleranciaImage}
        imagePosition="left"
        fadeImage="fade-right"
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
        id="sobre4"
        background="gray"
        title="Processamento de Leite UHT Deslactosado"
        description={`
          A indústria de laticínios vem nos últimos anos investindo no desenvolvimento e 
          produção de produtos com baixo teor de lactose e também os leites chamados zero lactose.
          O Leite UHT pode ser deslactosado por dois processos: o químico e enzimático.
        `}
        button="saiba mais"
        image={intoleranciaImage}
        imagePosition="right"
        fadeImage="fade-left"
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
        id="sobre5"
        background="white"
        title="Como ler rótulos?​ Contém lactose x Pode conter leite​"
        description={`
          A quantidade definida de lactose que irá causar sintomas varia de indivíduo para indivíduo, 
          dependendo do seu grau de deficiência de lactase e do teor de lactose no produto consumido. 
          Dessa forma o residual de lactose que pode estar presente no leite UHT, declarado zero lactose, pode desencadear sintomas indesejáveis.
          Você sabe interpretar o que vem escrito nas embalagens? 
        `}
        button="saiba mais"
        image={rotuloImage}
        imagePosition="left"
        fadeImage="fade-right"
      />
    </>
  )
}

export default Home
