import React from 'react';
import API from './API';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Planet from './pages/PlanetPage';
import Vehicles from './VehiclesPage';

function App() {
  const [people, setPeople] = React.useState([]);
  const [planets, setPlanets] = React.useState([]);
  const [vehicles, setVehicles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPeople();
    getPlanets();
    getVehicles();
  }, []);

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
  console.log('vehicles', vehicles);

  return (
    <>
      <Router>
        <Navigation />
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
          <Route exact path="/vehicles">
            <Vehicles vehicles={vehicles} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
