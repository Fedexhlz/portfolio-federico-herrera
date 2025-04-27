import React from 'react';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className='text-center my-3'>
      <p>🧑‍💻 2025 - Federico Herrera - Redes: </p>
      <Button variant='outline-primary'className='mx-2'>💼 LinkedIn</Button>
      <Button variant='outline-dark'className='mx-2'>🐙 GitHub</Button>
    </div>
  );
};

export default Footer;
