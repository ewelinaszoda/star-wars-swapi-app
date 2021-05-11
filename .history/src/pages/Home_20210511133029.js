import React from 'react';
import hero from '../hero.png';
import background from '../background.jpeg';
import PeopleList from '../containers/PeopleList';

const Home = ({ people, userSearch }) => {
  const filterPeople = () => {
    return people.filter((p) =>
      p.name.toUpperCase().includes(userSearch.toUpperCase())
    );
  };

  return (
    import background from '../background.jpeg';
      <img src={hero} alt="Hero" />
      <h2 style={{ display: 'center', color: 'grey' }}>LIST OF CHARACTERS</h2>
      <PeopleList people={filterPeople()} />
    </div>
  );
};

export default Home;
