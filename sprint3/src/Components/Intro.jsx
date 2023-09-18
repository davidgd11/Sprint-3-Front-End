import {} from 'react';
import '../assets/css/App.css';


function Intro() {
    return(
        <section id="intro">
        <div className="conteudo">
          <h3>Bem vindo ao canal do Semáforo Inteligente!</h3>
          <h2>Transformando o seu tempo</h2>
          <a href="#como-funciona"> <button> Saiba Mais </button> </a>
        </div>

        <div id="imagens">
          <img src="./src/assets/img5.jpg" className="img5"/>
          <img src="./src/assets/img4.jpg" className="img4"/>
        </div>
    </section>

    )
}

export default Intro