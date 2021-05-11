import React from 'react';
import background from '../background.jpeg';

const Starships = ({ starships }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h2>Starships</h2>
      {/* <PeopleContainer people={people} /> */}
    </div>
  );
};

export default Starships;
