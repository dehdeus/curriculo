import React from 'react';
import Imagem from '../assets/fotonoite.png';
import './menu.css'

function Menu () {
    return (
    <container id="menu">
      <section id="menu-lateral">
        <div>
          <img src={Imagem} className="foto-perfil" alt="foto-perfil"/>
        </div>
        <div id="contato">
          <p>
            Déborah Louise de Deus Tuba
          </p>
          <p>
            <a href="mailto:deborahtuba@gmail.com">Email</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/deborahdeustuba/">Linkedin</a>
          </p>
          <p>
            <a href="https://github.com/dehdeus">GitHub</a>
          </p>
        </div>
    </section>
    </container>
    )
}

export default Menu;