const BASE_URL = 'https://swapi.dev/api';

// To improve: I would refactoring the code below to one function fetchData
// with parameter data, where I will fetch(BASE_URL + `/{data}`)

const fetchAllPeople = () => {
  return fetch(BASE_URL + '/people')
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

const fetchAllPlanets = () => {
  return fetch(BASE_URL + '/planets')
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

const fetchAllVehicles = () => {
  return fetch(BASE_URL + '/Species')
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

export default { fetchAllPeople, fetchAllPlanets, fetchAllVehicles };
