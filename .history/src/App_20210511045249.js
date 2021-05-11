import React from 'react';
import API from './API';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import People from './PeoplePage';
import Planet from './PlanetPage';
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
     <Switch>
        <Route exact path="/">
          <Home people={people} />
        </Route>
        <Route exact path="/planets">
          <ProjectsPage logOut={props.logOut} user={props.user} />
        </Route> */}
         <Route exact path="/users/:userId/edit">
          <EditAccountForm
            logOut={props.logOut}
            user={props.user}
            updateState={props.updateState}
          />
        </Route>
      </Switch>
      <Navigation />

    

    </>
  );
}

export default App;
