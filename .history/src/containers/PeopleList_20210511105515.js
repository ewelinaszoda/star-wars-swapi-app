import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PeopleList = ({ people }) => {
  const renderPersonCard = () => {
    return people?.map((person, index) => (
      <Card
        key={index}
        style={{ width: '18rem' }}
        text="light"
        bg={'Info'.toLowerCase()}
        className="mb-2"
      >
        <Card.Header>Birth year: {person.birth_year}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: 'grey' }}>{person.name}</Card.Title>
          <Card.Text>
            Gender: {person.gender} | Hair color: {person.hair_color}
          </Card.Text>
          <Link 
          <Button variant="secondary">Show more details</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div style={{ width: '100%' }}>
      <div class="row" style={{ margin: '20px 5px' }}>
        <div class="col-sm-6">{renderPersonCard()}</div>
      </div>
    </div>
  );
};

export default PeopleList;
