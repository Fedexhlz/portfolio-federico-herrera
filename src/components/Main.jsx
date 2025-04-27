import React from 'react';
import '../css/Main.css';

const Main = (props) => {
  const { nombre, universidad, carrera, amigo, lenguajes } = props.alumno;

  return (
    <div>
      <p>
        HOLA, me llamo {nombre} y soy alumno de 2do año de la carrera "{carrera}
        " de la {universidad} y sí, soy compañero de {amigo}
      </p>
      <ul>
        <li>Lenguajes:</li>
        {lenguajes.map((lenguaje, i) => (
          <li key={i}>{lenguaje}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
