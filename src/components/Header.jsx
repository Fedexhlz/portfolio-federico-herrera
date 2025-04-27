import React from 'react';

const Header = (props) => {
  const { nombre, apellido } = props.alumno;

  return (
    <div>
      <h1>
        Portfolio {nombre} {apellido}
      </h1>
      <hr />
    </div>
  );
};

export default Header;
