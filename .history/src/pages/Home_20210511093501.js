import React from 'react';

const Home = ({ people }) => {

  const renderPersonDiv = () => {
    return people?.map((person, index) => (
      <div key={index}>
        <h3>Name: {person.name}</h3>
        <h4>Height: {person.height}</h4>
        <
      </div>
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