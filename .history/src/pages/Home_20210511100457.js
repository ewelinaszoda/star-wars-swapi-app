import React from 'react';
import { Card, Button } from 'react-bootstrap';
import hero from '../hero.png';

const Home = ({ people }) => {
  const renderPersonDiv = () => {
    return people?.map((person, index) => (
      <Card key={index} style={{ width: '18rem' }}  test='light' bg="Info" className="mb-2">
        <Card.Header>Birth year: {person.birth_year}</Card.Header>
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>
            Gender: {person.gender} | Hair color: {person.hair_color}
          </Card.Text>
          <Button variant="primary">Show more details</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
    {/* // <div style={{ width: '100%' }}> */}
      <h2 style={{ display: 'center' }}>LIST OF CHARACTERS</h2>
      hero
      <div class="row" style={{ margin: '20px 5px' }}>
        <div class="col-sm-6">{renderPersonDiv()}</div>
      </div>
    </div>
  );
};

export default Home;
