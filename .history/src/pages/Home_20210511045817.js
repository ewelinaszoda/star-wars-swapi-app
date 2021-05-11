import React from 'react';
// import API from '../API';

import PeopleContainer from '../containers/PeopleContainer.js';

const Home = ({ people }) => {

  return (
    <div>
        <h2>LIST OF CHARACTERS</h2>
        <PeopleContainer people={people} />
      </div>
  );
};

export default Home;