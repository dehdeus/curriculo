import React from 'react';
import Button from 'react-bootstrap/Button';
import './experiencia.css'

function Experiencia () {
    return (
        <section id="exp">
            <h2>EXPERIÊNCIA</h2>
            <div>
                <p>
                    Exp 1 <br />
                    - xxxxxxxxx<br />
                    - xxxxxxxxx<br />
                    - xxxxxxxxx<br />
                </p>
                <Button variant="outline-primary" onclick="vermais1">Ver Mais</Button>
            </div>
            <div>
                <p>
                    Exp 2 <br />
                    - yyyyyyyyy<br />
                    - yyyyyyyyy<br />
                    - yyyyyyyyy<br />
                </p>
                <Button variant="outline-primary" onclick="vermais2">Ver Mais</Button>
            </div>
            <div>
                <p>
                    Exp 3 <br />
                    - zzzzzzzzz<br />
                    - zzzzzzzzz<br />
                    - zzzzzzzzz<br />
                </p>
                <Button variant="outline-primary" onclick="vermais3">Ver Mais</Button>
            </div>
        </section>
    )
}

export default Experiencia