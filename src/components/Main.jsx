import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/Main.css';
import imagen from '../img/WhatsApp Image 2020-09-16 at 19.16.49 - copia.jpg';

const Main = (props) => {
  const { nombre, universidad, carrera, amigo, lenguajes } = props.alumno;

  return (
    <div>
      <Card className='mx-auto py-3 px-4 ' style={{ width: '26rem' }}>
        <Card.Img variant='top' src={imagen} />
        <Card.Body>
          <Card.Text style={{ textAlign: 'justify' }}>
            HOLA, me llamo {nombre} y soy alumno de 2do año de la carrera{' '}
            <i>{carrera}</i> de la <i>{universidad}</i> y sí, soy compañero de {amigo}
          </Card.Text>

          <ListGroup variant='flush'>
            <ListGroup.Item className='px-0  border-dark border-end-0'>
              Lenguajes:
            </ListGroup.Item>
            {lenguajes.map((lenguaje, i) => (
              <ListGroup.Item
                className='px-0  border-dark border-end-0'
                key={i}
              >
                {lenguaje}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Main;
