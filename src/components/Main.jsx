import React from 'react';
import '../css/Main.css';

const Main = (props) => {
  const { nombre, universidad, carrera, amigo } = props.alumno;

  return (
    <div>
      <p>
        HOLA, me llamo {nombre} y soy alumno de 2do año de la carrera "{carrera}
        " de la {universidad} y sí, soy compañero de {amigo}
      </p>
      <ul>
        <li>Lenguajes:</li>
        <li>Español</li>
        <li>Inglés</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>Java</li>
        <li>HTML</li>
        <li>Css</li>
        <li>Bootstrap</li>
      </ul>
    </div>
  );
};

export default Main;
