import React from 'react';
import './formacao.css'

function Formacao() {
    return (
        <container>
            <section id="fortxt">
                <h2>FORMAÇÃO</h2>
                    <div className="forbullets">
                        <h4>DIGITAL HOUSE</h4>
                        <li>Web Full Stack</li>
                        <li>Início: 2020</li>
                        <li>Conclusão: 2021</li>
                    </div>
                    <div className="forbullets">
                        <h4>ESCOLA SUPERIOR DE PROPAGANDA E MARKETING (ESPM)</h4>
                        <li>Pós-Graduação em Marketing com Ênfase em Negócios</li>
                        <li>Início: 2014</li>
                        <li>Conclusão: 2016</li>
                    </div>
                    <div className="forbullets">
                        <h4>FACULDADE CÁSPER LÍBERO</h4>
                        <li>Graduação em Jornalismo</li>
                        <li>Início: 2009</li>
                        <li>Conclusão: 2012</li>
                    </div>
            </section>
        </container>
    )
}

export default Formacao