import {} from 'react';
import '../assets/css/App.css';

function Contato () {
    return(

    <section id="contato">
    <form id="conteudo-contato">
      <div id="all">
      <h1> Entre em contato!</h1>

      <main id="inputs">

      
          <input type="text" id="nomeid"
          placeholder="NOME " required="required"/>
     
          <input type="email" id="emailid"
          placeholder="E-MAIL" required="required"/>

          <input type="text" id="assunto"
          placeholder="ASSUNTO PRINCIPAL" required="required"/>

          <textarea id="mensagem" placeholder="MENSAGEM"/>
      </main>
      
      <button><input type="submit" id="submit" value="Enviar"/> </button>
      </div>
    </form>
        

    </section>

                    

    )
}

export default Contato