import React from 'react';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

export const GlobalEscopo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
export const PageContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
  text-align: center;
  margin-bottom: 20px;
`
export const TitulosHdois = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
`

function App() {
  return (
    <GlobalEscopo>
      <PageContainer>
        <TitulosHdois>Dados pessoais</TitulosHdois>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQEBG_VCdFcVoA/profile-displayphoto-shrink_800_800/0/1625036475234?e=1636588800&v=beta&t=B51L0ZuI8NQ037IUrYDnj3zRWRxMV_0cUANfQa8akEY" 
          nome="Leonardo Gomes" 
          descricao="Me chamo Leonardo Gomes tenho 23 anos, sempre gostei da área de comunicação
          e tecnologia. Hoje estou cursando a graduação em Análise e Desenvolvimento de Sistemas e
          estudando Web Full-Stack na Labenu, para me tornar um desenvolvedor Front-End
          e me especializar em UX-Design."/>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://images.clipartlogo.com/files/images/18/182803/icon-letter-mail_p" 
          nome="Email:" 
          descricao="Leo.sgomes61@gmail.com"/>

          <CardPequeno 
          imagem="https://w7.pngwing.com/pngs/255/760/png-transparent-black-location-icon-illustration-computer-icons-adress-miscellaneous-desktop-wallpaper-location.png" 
          nome="Endereço:" 
          descricao="Rua Labenu"/>
      </PageContainer>

      <PageContainer>
        <TitulosHdois>Formação e Experiências</TitulosHdois>
        <CardGrande 
          imagem="https://media.licdn.cn/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0/1588617268603?e=2159024400&v=beta&t=a88brKeePgoXCa0PpjouqjPLfp25RQso7CCWfbvQ9qg" 
          nome="Labenu" 
          descricao="A Labenu é uma startup focada no ensino de Desenvolvimento Web Full-Stack com o direcionamento a demanda do mercado de tecnologia. São mais de 1000 horas de programação e projetos que faz com que seus alunos sejam profissionais tecnicamente preparados." 
        />
        
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5f779d2aa09fa059a0edddb3/6127cc6422c7dd16230ff4db_DESCOMPLICA%20D.png" 
          nome="Faculdade Descomplica" 
          descricao="Introdução à Tecnologia da Informação, Software e Lógica de Programação, Desenvolvimento de Software, Desenvolvimento mobile incluindo disponibilização de interfaces de backend inovadoras e o uso de Big Data e Bancos de dados tradicionais." 
        />
      </PageContainer>

      <PageContainer>
        <TitulosHdois>Minhas redes sociais</TitulosHdois>

        <ImagemButton 
          imagem="https://poised-flock.surge.sh/img/linkedin-logo.png" 
          texto="Linkedin" 
        />      

        <ImagemButton 
          imagem="https://poised-flock.surge.sh/img/github-logo.png" 
          texto="GitHub" 
        />        
      
      </PageContainer>
    </GlobalEscopo>
  );
}

export default App;
