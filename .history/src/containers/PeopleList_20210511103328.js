import React from 'react';
import { Card, Button } from 'react-bootstrap';


const Home = ({ people }) => {

  const [userSearch, setUserSearch] = React.useState("")

  const updateUserSearch = (e) => {
    setUserSearch(e.target.value)
  }

  const filterPeople = () => {
    return people.filter(p => p.name.toUpperCase().includes(userSearch.toUpperCase()))
  }


  const renderPersonDiv = () => {
    return people?.map((person, index) => (
      <Card
        key={index}
        style={{ width: '18rem' }}
        text="light"
        bg={'Info'.toLowerCase()}
        className="mb-2"
      >
        <Card.Header>Birth year: {person.birth_year}</Card.Header>
        <Card.Body>
          <Card.Title style={{color: 'grey'}}>{person.name}</Card.Title>
          <Card.Text>
            Gender: {person.gender} | Hair color: {person.hair_color}
          </Card.Text>
          <Button variant="secondary">Show more details</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >

      {/* // <div style={{ width: '100%' }}> */}
      <img src={hero} alt="Hero" />
      <h2 style={{ display: 'center', color: 'grey'}}>LIST OF CHARACTERS</h2>
      <PeopleList people={filterPeople()} />
      <div class="row" style={{ margin: '20px 5px' }}>
        <div class="col-sm-6">{renderPersonDiv()}</div>
      </div>
    </div>
  );
};