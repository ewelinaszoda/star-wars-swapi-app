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
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <center>
        <img
          style={{
            minWidth: '600px',
            margin: '40px',
          }}
          src={hero}
          alt="Hero"
        />
        <h2 style={{ color: 'grey', margin: '20px' }}>LIST OF CHARACTERS</h2>
        <div style={{ margin: '20px' }}>
          <PeopleList people={filterPeople()} />
        </div>
      </center>
    </div>
  );
};

export default Home;
