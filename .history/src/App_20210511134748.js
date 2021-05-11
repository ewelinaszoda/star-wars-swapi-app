import React from 'react';
import API from './API';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Planets from './pages/Planets';
import Starships from './pages/Starships';
import Spinner from './components/Spinner';

function App() {
  const [people, setPeople] = React.useState([]);
  const [planets, setPlanets] = React.useState([]);
  const [starships, setStarships] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [userSearch, setUserSearch] = React.useState('');

  React.useEffect(() => {
    getPeople();
    getPlanets();
    getVehicles();
    setLoading(false);
  }, []);

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

  const getStarships = () => {
    API.fetchAllVehicles()
      .then((data) => setstar(data.results))
      .catch((error) => console.error(error));
  };

  console.log('people', people);
  console.log('planets', planets);
  console.log('starships', sstarships);

  return (
    <>
      <Router>
        <Navigation
          updateUserSearch={updateUserSearch}
          userSearch={userSearch}
        />
        {loading ? (
          <Spinner />
        ) : (
          <Switch>
            <Route exact path="/">
              <Home people={people} userSearch={userSearch} />
            </Route>
            <Route exact path="/planets">
              <Planets planets={planets} />
            </Route>
            <Route exact path="/starships">
              <Species atarships={starships} />
            </Route>
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
