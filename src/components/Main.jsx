import React from 'react';
import "../css/Main.css"

const Main = () => {
  let alumno = 'Fd';
  let alumnoSum = 'Sumerinde';
  let alumnoCal = 'Calcagni';

  return (
    <div>
      <h3>
        HOLA, me llamo {alumno} y soy alumno de 2do año de la carrera
        "Tecnicatura Universitaria en Programación" de la Universidad
        Tecnológica Nacional - Factultad Regional Tucumán y sí, soy compañero de{' '}
        {alumnoSum} y de {alumnoCal}
      </h3>
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
