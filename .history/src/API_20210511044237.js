const BASE_URL = 'https://swapi.dev/api';

// Improvement: I would refactoring the code below to one function fetchData 
// with paramater data, where I will fetch(BASE_URL + `/{data}`)

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
  return fetch(BASE_URL + '/vehicles')
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

// const getFilms = (url) => {
//   return fetch(url)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((error) => console.error(error));
// };

// const getFilmList = (films) => {
//   const allFilms = films.map((films) => {
//     return fetch(films).then((response) => response.json());
//   });

//   return Promise.all(allFilms);
// };

// eslint-disable-next-line
export default { fetchAllPeople, fetchAllPlanets, fetchAllVehicles };
