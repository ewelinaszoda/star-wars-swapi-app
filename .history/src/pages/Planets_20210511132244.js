import React from 'react';
import { Table } from 'react-bootstrap';

const Planets = ({ planets }) => {

  const renderPlanetCard = () => {
    return people?.map((person, index) => (
      <Card
        key={index}
        style={{ width: '18rem' }}
        text="light"
        bg={'Dark'.toLowerCase()}
        className="mb-2"
      >
        <Card.Header>Birth year: {person.birth_year}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: 'grey' }}>{person.name}</Card.Title>
          <Card.Text>
            Gender: {person.gender} | Hair color: {person.hair_color}
          </Card.Text>
          <Link to={`/people/${index+1}/`} style={{ textDecoration: 'none' }}>
          <Button variant="secondary">Show more details</Button>
          </Link>
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
