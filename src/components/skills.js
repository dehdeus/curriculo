import React from 'react';
import './skills.css'

function Skills() {
    return (
        <container>
          <h2 id="skillstitulo">SKILLS</h2>
          <section id="skills-texto">
              <div>
                <h4>Soft Skills</h4>
                  <li>Comunicativa</li>
                  <li>Trabalho em equipe</li>
                  <li>Aprendizado rápido</li>
                  <li>Liderança</li>
                  <li>Flexibilidade</li>
              </div>
              <div>
                <h4>Hard Skills</h4>
                  <li>Photoshop</li>
                  <li>InDesign</li>
                  <li>Final Cut</li>
                  <li>Pacote Office</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
              </div>
              <div>
                <h4>Idioma</h4>
                  <li>Inglês / Avançado</li>
                  <li>Espanhol / Avançado</li>
                  <li>Português / Fluente</li>
              </div>
          </section>
        </container>
    )
}

export default Skills;