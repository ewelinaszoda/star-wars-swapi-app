import React from 'react';
import { Table } from 'react-bootstrap';

const Planets = ({ planets }) => {

  const renderPlanetCard = () => {
    return planets?.map((p, index) => (
      <Card
        key={index}
        style={{ width: '18rem' }}
        text="light"
        bg={'Dark'.toLowerCase()}
        className="mb-2"
      >
        <Card.Header>{p.name}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: 'grey' }}>{person.name}</Card.Title>
          <Card.Text>
            Gender: {person.gender} | Hair color: {person.hair_color}
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  };

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
