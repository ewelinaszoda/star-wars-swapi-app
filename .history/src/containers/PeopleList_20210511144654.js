import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PeopleList = ({ people }) => {
  const renderPersonCard = () => {
    return people?.map((person, index) => (
      <Card
        key={index}
        person={person}
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
          <Link to={`/people/${person.id}/`} style={{ textDecoration: 'none' }}>
            <Button variant="secondary">Show more details </Button>
          </Link>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div style={{ width: '100%' }}>
      <div class="row" style={{ margin: '20px 5px' }}>
        <div class="col-sm-6">{renderPersonCard()}</div>
      </div>
      <div>
        <h2>people object</h2>
        <pre style={{ color: 'white' }}>{JSON.stringify(people, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PeopleList;
