import React from 'react';
// import API from '../API';

import PeopleContainer from '../containers/PeopleContainer.js';

const Home = ({ people }) => {

  return (
    <div>
      <div>
        <h2>LIST OF CHARACTERS</h2>
        <PeopleContainer people={people} />
      </div
    </div>
  );
};

export default Home;