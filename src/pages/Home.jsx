import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
  const alumno = {
    nombre: 'Federico',
    apellido: 'Herrera',
    edad: 38,
    lenguajes: ['✨ Javascript', '🎯 C#', '☕ Java'],
    carrera: 'Tecnicatura Universitaria en Programación',
    universidad:
      'Universidad Tecnológica Nacional - Factultad Regional Tucumán',
    amigo: 'Sumerinde',
  };

  return (
    <div>
      <Header alumno={alumno} />
      <Main alumno={alumno} />
      <Footer />
    </div>
  );
};

export default Home;
