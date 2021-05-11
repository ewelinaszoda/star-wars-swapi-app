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
  return (
    <div>
        <h2>LIST OF CHARACTERS</h2>
        hero
        {/* <PeopleContainer people={people} /> */}
      </div>
  );
};

export default Home;