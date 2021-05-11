import React from 'react';
import { Card, Button } from 'react-bootstrap';
import hero from '../hero.png';
import background from '../background.jpeg';

const Home = ({ people }) => {
  const renderPersonDiv = () => {
    return people?.map((person, index) => (
      <Card
        key={index}
        style={{ width: '18rem' }}
        test="light"
        bg="Info"
        className="mb-2"
      >
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
    <div        style={{
      background: {Background})`,
    }}>
      {/* // <div style={{ width: '100%' }}> */}
      <img src={hero} alt="Hero" />
      <h2 style={{ display: 'center' }}>LIST OF CHARACTERS</h2>
      <div class="row" style={{ margin: '20px 5px' }}>
        <div class="col-sm-6">{renderPersonDiv()}</div>
      </div>
    </div>
  );
};

export default Home;
