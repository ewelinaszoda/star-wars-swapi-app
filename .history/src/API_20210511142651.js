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

const fetchAllStarships = () => {
  return fetch(BASE_URL + '/starships')
    .then((res) => res.json())
    .catch((error) => console.error(error));
};
// eslint-disable-next-line
export default { fetchAllPeople, fetchAllPlanets, fetchAllStarships };
