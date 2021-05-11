import React from 'react';
import API from './API';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People.js';
import Planets from './pages/Planets';
import Species from './pages/Species';

function App() {
  const [people, setPeople] = React.useState([]);
  const [planets, setPlanets] = React.useState([]);
  const [Species, setVehicles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [userSearch, setUserSearch] = React.useState('');

  React.useEffect(() => {
    getPeople();
    getPlanets();
    getVehicles();
  }, []);

  const filterPeople = () => {
    return people.filter((p) =>
      p.name.toUpperCase().includes(userSearch.toUpperCase())
    );
  };

  const updateUserSearch = (e) => {
    setUserSearch(e.target.value);
  };

  const getPeople = () => {
    API.fetchAllPeople()
      .then((data) => setPeople(data.results))
      .catch((error) => console.error(error));
  };

  const getPlanets = () => {
    API.fetchAllPlanets()
      .then((data) => setPlanets(data.results))
      .catch((error) => console.error(error));
  };

  const getVehicles = () => {
    API.fetchAllVehicles()
      .then((data) => setVehicles(data.results))
      .catch((error) => console.error(error));
  };

  console.log('people', people);
  console.log('planets', planets);
  console.log('Species', Species);

  return (
    <>
      <Router>
        <Navigation
          updateUserSearch={updateUserSearch}
          userSearch={userSearch}
        />
        <Switch>
          <Route exact path="/">
            <Home people={people} />
          </Route>
          <Route exact path="/people">
            <People people={people} />
          </Route>
          <Route exact path="/planets">
            <Planets planets={planets} />
          </Route>
          <Route exact path="/Species">
            <Species Species={Species} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
