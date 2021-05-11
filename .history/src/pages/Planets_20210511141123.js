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
            <p>
              <strong>Climate : </strong>
              {planet.climate}
            </p>
            <p>
              <strong>Terrain : </strong>
              {planet.terrain}
            </p>
            <p>
              <strong>Gravity : </strong>
              {planet && planet.gravity}
            </p>
            <p>
              <strong>Diameter : </strong>
              {planet && planet.diameter}
            </p>
            <p>
              <strong>Orbital Period : </strong>
              {planet.orbital_period}
            </p>
            <p>
              <strong>Rotation Period : </strong>
              {planet.rotation_period}
            </p>
          </Card.Text>
          <Card.Text>  <strong>Climate : </strong>
              {planet.climate}</Card.Text>
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
      <h2>Planets</h2>
      <div style={{ display: 'inline-block' }}>{renderPlanetCard()}</div>
    </div>
  );
};

export default Planets;
