import React from 'react';
import PeopleContainer from '../containers/PeopleContainer.js';

const Home = ({ people }) => {
  
  const renderPersonCard = () => {
    return people?.map((person, index) => (
      <div key={index}>
        <h3>Name: {person.name}</h3>
        <h4>Height: {person.height}</h4>
      </div>
    ));
  };

  return (
    <div style={{ width: '100%' }}>
        <h2>LIST OF CHARACTERS</h2>
        hero
     
      <div>{renderPersonCard()}</div>
  
      </div>
  );
};

export default Home;