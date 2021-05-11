import React from 'react';
// import API from '../API';

import PeopleContainer from '../containers/PeopleContainer.js';

const Home = ({ people }) => {

  return (
    <div>
      <div>
        <h2>LIST OF CHARACTERS</h2>
        <PeopleContainer people={people} />
      </div>
      <div>
        <h2>people object</h2>
        <pre>{JSON.stringify(people, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Home;