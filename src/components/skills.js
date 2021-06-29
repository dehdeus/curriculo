import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './skills.css'

function Skills() {
    return (
        <section id="skills-texto">
          <h2>SKILLS</h2>
          <div>
            <h3>Soft Skills</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
              </ListGroup>
          </div>
          <div>
            <h3>Hard Skills</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
              </ListGroup>
          </div>
          <div>
            <h3>Idioma</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
                <ListGroup.Item>XXXXXXXXXXX</ListGroup.Item>
              </ListGroup>
          </div>
        </section>
    )
}

export default Skills;