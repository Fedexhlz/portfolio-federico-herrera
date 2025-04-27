import React from 'react';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
  const [linkedin, github] = props.redes;

  return (
    <div className='text-center my-3'>
      <p>🧑‍💻 2025 - Federico Herrera - Redes: </p>
      <a href={linkedin} target='_blank'>
        <Button variant='outline-primary' className='mx-2'>
          💼 LinkedIn
        </Button>
      </a>
      <a href={github} target='_blank'>
        <Button variant='outline-dark' className='mx-2'>
          🐙 GitHub
        </Button>
      </a>
    </div>
  );
};

export default Footer;
