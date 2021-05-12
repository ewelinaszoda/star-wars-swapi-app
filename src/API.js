const BASE_URL = 'https://swapi.dev/api';

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

const fetchPersonDetails = (id) => {
  return fetch(BASE_URL + `/people/${id}/`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

const fetchInfo = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.error(error));
};
// eslint-disable-next-line
export default {
  fetchAllPeople,
  fetchAllPlanets,
  fetchAllStarships,
  fetchPersonDetails,
  fetchInfo,
};
