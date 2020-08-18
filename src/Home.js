import React from 'react';
import style from 'styled-components';
import Menu from './componentes/Menu';
import DadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;
  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={'O que é Front-end?'}
      />

      <Carousel ignoreFirstVideo category={DadosIniciais.categorias[1]} />

      <Carousel category={DadosIniciais.categorias[0]} />

      <Carousel category={DadosIniciais.categorias[2]} />
      <Carousel category={DadosIniciais.categorias[3]} />
      <Carousel category={DadosIniciais.categorias[4]} />
      <Carousel category={DadosIniciais.categorias[5]} />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
