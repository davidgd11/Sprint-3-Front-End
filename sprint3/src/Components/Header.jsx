import {} from 'react';
import '../assets/css/App.css';
import Login from './Login';


function Header() {
    return(

    <header>
      <div id="logo">
        <img src="./src/assets/img6.png" alt="Imagem de um faról" className="img-farol" />

        <h1> 
          <span>Semáforo</span> <br/>
          <span>Inteligente</span>
        </h1>
      </div>

      <nav id="navegador">
        <ul>
          <li><a href="#logo">INÍCIO</a></li>
          <li><a href="#como-funciona">COMO FUNCIONA</a></li>
          <li><a href="#apoiadores">APOIADORES </a></li>
          <li><a href="#onde-achar">ONDE ACHAR? </a></li>
        </ul>

        <div id="botoes">
          <a href="#contato" className='investir'> <button>Contato</button> </a>  
          <a href="Login" className='login'> <button>Login</button> </a>  
        </div>
      </nav>
    </header>
)
}

export default Header 
