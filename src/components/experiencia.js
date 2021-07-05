import React from 'react';
import Button from 'react-bootstrap/Button';
import './experiencia.css'

function Experiencia() {
    return (
        <container id="expcontainer">
            <section id="exp">
                <h2>EXPERIÊNCIA</h2>
                    <div className="expbullets">
                        <h4>LD Varejo e Representação</h4>
                        <li>Início: Abr/2015</li>
                        <li>Término: Atual</li>
                        <li>Planejamento de Comunicação e Marketing para as Redes Sociais, Adward</li>
                        <li>Atendimento ao Cliente e Fornecedor</li>
                        <li>Gestão na plataforma Vtex – Estoque, categorias, Organização do Site</li>
                        <li>Liderar projeto de implantação dos produtos em Marketplaces</li>
                        <Button variant="outline-primary" onclick="vermais1">VER MAIS</Button>
                    </div>
                    <div className="expbullets">
                        <h4>Momentum Brasil</h4>
                        <li>Início: Set/2013</li>
                        <li>Término: Abr/2015</li>
                        <li>Clientes: Bradesco, Nestlé, Nextel, GM, J&J, Nissan, Senac, Zurich, GoDaddy, Cultura Inglesa, Kimberley-Clark, Colgate, Sony, Editora Abril</li>
                        <li>Produção e desenvolvimento de conteúdos para portais internos e externosda empresa</li>
                        <li>Planejamento de ações voltadas para a comunicação corporativa</li>
                        <Button variant="outline-primary" onclick="vermais2">VER MAIS</Button>
                    </div>
                    <div className="expbullets">
                        <h4>SKY Brasil</h4>
                        <li>Início: Jan/2011</li>
                        <li>Término: Dez/2012</li>
                        <li>Estagiária</li>
                        <li>Atendendo aproximadamente 2.500 funcionários</li>
                        <li>Produção e desenvolvimento de conteúdos para os veículos internos da empresa</li>
                        <Button variant="outline-primary" onclick="vermais3">VER MAIS</Button>
                    </div>
            </section>
            <section>
                
            </section>
        </container>
    )
}

export default Experiencia