import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PeopleList = ({ people }) => {
  const renderPersonCard = () => {
    return people?.map((person, index) => (
      <Card
        key={index}
        person={person}
        style={{ width: '18rem', margin: '20px 5px', display: 'inline-block' }}
        text="light"
        bg={'Info'.toLowerCase()}
        className="mb-2"
      >
        <Card.Header>Birth year: {person.birth_year}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: 'grey' }}>{person.name}</Card.Title>
          <Card.Text style={{ minHeight: '47.5px' }}>
            Gender: {person.gender} | Hair color: {person.hair_color}
          </Card.Text>
          <Link to={`/people/${index + 1}/`} style={{ textDecoration: 'none' }}>
            <Button variant="secondary">Show more details </Button>
          </Link>
        </Card.Body>
      </Card>
    ));
  };

  return <div>{renderPersonCard()}</div>;
};

export default PeopleList;
