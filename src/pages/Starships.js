import React from 'react';
import { Card } from 'react-bootstrap';
import background from '../background.jpeg';

const Starships = ({ starships }) => {
  const renderStarshipCard = () => {
    return starships?.map((s, index) => (
      <Card border="info" style={{ width: '18rem', margin: '20px' }}>
        <Card.Header>
          {s.starship_class} {s.model}
        </Card.Header>
        <Card.Body>
          <Card.Title>{s.name}</Card.Title>
          <Card.Text>
            Max speed: {s.max_atmosphering_speed} | Manufacture: {s.manufacture}
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
      <h2 style={{ display: 'center', color: 'grey' }}>Starships</h2> <br />
      <div className="col-sm-6">{renderStarshipCard()}</div>
    </div>
  );
};

export default Starships;
