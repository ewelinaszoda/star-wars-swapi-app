import React from 'react';
import background from '../background.jpeg';

const Planets = ({ planets }) => {

  return (
    <div
    style={{
      backgroundImage: `url(${background})`,  backgroundsize: 100% : '100%',
    }}
  >
        <h2>Planets</h2>
        {/* <PeopleContainer people={people} /> */}
      </div>
  );
};

export default Planets;