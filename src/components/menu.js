import React from 'react';
import Imagem from '../assets/fotonoite.png';
import './menu.css'

function Menu () {
    return (
    <section id="menu-lateral">
      <div>
        <img src={Imagem} className="foto-perfil" alt="foto-perfil"/>
      </div>
      <div id="contato">
        <p>
          Déborah Louise de Deus Tuba
        </p>
        <p>
          Telefone: (xx) xxxxx-xxxx
        </p>
        <p>
          Email: xxxxxxx@gmail.com
        </p>
        <p>
          Linkedin
        </p>
        <p>
          Github
        </p>
      </div>
      <footer id="footer">
        <p>
          &copy; Dehdeus
        </p>
      </footer>
    </section>
    )
}

export default Menu;