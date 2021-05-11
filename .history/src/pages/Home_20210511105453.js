import React from 'react';
import { Card, Button } from 'react-bootstrap';
import hero from '../hero.png';
import background from '../background.jpeg';
import PeopleList from '../containers/PeopleList';

const Home = ({ people, userSearch }) => {
  // const [userSearch, setUserSearch] = React.useState('');

  // const updateUserSearch = (e) => {
  //   setUserSearch(e.target.value);
  // };

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
      <PeopleList people={filterPeople()} />
    </div>
  );
};

export default Home;
