import React from 'react';
import { Card , Button } from 'react-bootstrap';

const Home = ({ people }) => {

  const renderPersonDiv = () => {
    return people?.map((person, index) => (
      // <div key={index}>
      //   <h3>Name: {person.name}</h3>
      //   <h4>Height: {person.height}</h4>
      //   Show more buttton
      // </div>


<Card key={index} style={{ width: '18rem' }} bg={'Info'} className='mb-2'>
<Card.Header>{person.birt}</Card.Header>
  <Card.Body>
    <Card.Title>{person.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Show more details</Button>
  </Card.Body>
</Card>
    ));
  };

  return (
    <div style={{ width: '100%' }}>
        <h2>LIST OF CHARACTERS</h2>
        hero
     
      <div>{renderPersonDiv()}</div>
  
      </div>
  );
};

export default Home;