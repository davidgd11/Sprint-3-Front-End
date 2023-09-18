import React from 'react';
import './assets/css/App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Comofunciona from './Components/Comofunciona';
import Apoiadores from './Components/Apoiadores';
import Ondeachar from './Components/Ondeachar';
import Login from './Components/Login';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
function App() {

  return (
    <>
    <Header/> 
    <Intro/>
    <Comofunciona/>
    <Apoiadores/>
    <Ondeachar/>
    <Login/>
    <Contato/>
    <Footer/>
    </>

  )
}

export default App
