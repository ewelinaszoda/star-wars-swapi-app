import React from 'react';
import { Card } from 'react-bootstrap';
import background from '../background.jpeg';

const Planets = ({ planets }) => {
  const renderPlanetCard = () => {
    return planets?.map((planet, index) => (
      <Card
        key={index}
        style={{ width: '18rem' }}
        text="light"
        bg={'Dark'.toLowerCase()}
        className="mb-2"
      >
        <Card.Header>Population: {planet.population}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: 'yellow' }}>{planet.name}</Card.Title>
          <Card.Text>
            <strong>Climate : </strong>
            {planet.climate}
          </Card.Text>
          <Card.Text>
            <strong>Terrain : </strong>
            {planet.terrain}
          </Card.Text>
          <Card.Text>
            <strong>Gravity : </strong>
            {planet.gravity}
          </Card.Text>
          <Card.Text>
            <strong>Diameter : </strong>
            {planet.diameter}
          </Card.Text>
          <Card.Text>
            <strong>Orbital Period : </strong>
            {planet.orbital_period}
          </Card.Text>
          <Card.Text>
            <strong>Rotation Period : </strong>
            {planet.rotation_period}
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <center>
        <h2 style={{ color: 'grey', padding: '20px' }}>Planets</h2>
        <div style={{ display: 'inline-block' }}>{renderPlanetCard()}</div>
      </center>
    </div>
  );
};

export default Planets;
