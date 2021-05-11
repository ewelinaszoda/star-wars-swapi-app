import React from 'react';
import { Table } from 'react-bootstrap';
import background from '../background.jpeg';

const Planets = ({ planets }) => {

  return (
    <div
    style={{
      backgroundImage: `url(${background})`,  backgroundSize: '100%', backgroundRepeat: 'no-repeat'
    }}
  >
        <h2>Planets</h2>
        
   
      </div>
  );
};

export default Planets;
