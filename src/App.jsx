import styled from 'styled-components';

import {useJokeContext} from './hooks/useJokeContext';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

const AppContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 40%;
  @media screen and (max-width: 1030px){
    width: 50%;
  }

  @media screen and (max-width: 812px){
    width: 60%;
  }
  
  @media screen and (max-width: 686px){
    width: 70%;
  }
  
  @media screen and (max-width: 592px){
    width: 80%;
  }

  @media screen and (max-width: 400px){
    width: 90%;
  }
  
  @media screen and (max-width: 300px){
    width: 98%;
  }
`

const App = () => {
  const {jokesInfo: {isJokePageOn}} = useJokeContext();
  return <AppContainer>
    {
      isJokePageOn ?
      <>
      <Header />
      <Main />
      <Footer />
      </> :
      <Modal />
    }
  </AppContainer>
}

export default App
