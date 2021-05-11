import React from 'react';
// import API from '../API';

import PeopleContainer from '../containers/PeopleContainer.js';

const Home = ({ people }) => {
  // const [people, setPeople] = React.useState([]);
  // const [films, setFilms] = React.useState([]);

  // React.useEffect(() => {

  //   API.getAllPeople()
  //     .then((data) => setPeople(data.results))
  //     .catch((error) => console.error(error));
  // }, []);

  // React.useEffect(() => {
  //   const getListFilm = () => people?.map((person => person.films.map((film) =>
  //     API.getFilms(film)))
  //       .then((films) => setFilms(films))
  //       // .then((films) => console.log(films))
  //       .catch((error) => console.error(error))
  //   )
  // }, [people]);

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