import React from 'react';
import hero from '../hero.png';
import background from '../background.jpeg';
import PeopleList from '../containers/PeopleList';

const Home = ({ people, userSearch, personId, handleClick }) => {
  const filterPeople = () => {
    return people.filter((p) =>
      p.name.toUpperCase().includes(userSearch.toUpperCase())
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    
    >
      <img src={hero} alt="Hero" />
      <h2 style={{ display: 'center', color: 'grey' }}>LIST OF CHARACTERS</h2>
      <PeopleList
        people={filterPeople()}
        personId={personId}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Home;
