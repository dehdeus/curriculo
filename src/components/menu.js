import React from 'react';
import Imagem from '../assets/fotonoite.png';

function Menu () {
    return (
    <section>
      <div>
        <img src={Imagem} className="foto-perfil" alt="foto-perfil"/>
      </div>
      <div>
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
    </section>
    )
}

export default Menu;