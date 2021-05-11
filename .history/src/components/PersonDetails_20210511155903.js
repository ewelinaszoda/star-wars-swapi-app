import React from 'react';
import API from '../API';

function PersonDetails({people}) {
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState("");
  const [birth_year, setHair_color] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [mass, setMass] = React.useState("");
  const [homeworld, setHomeworld] = React.useState("");
  const [species, setSpecies] = React.useState([]);



  const getData = (data) => setState({
    id: data.id,
    name: data.name,
    birth_year: data.birth_year,
    height: data.height,
    mass: data.mass,
    homeworld: data.homeworld,
    species: data.species
    
  })

  React.useEffect(() => {
    API.fetchPersonDetails()
      .then((data) => setPeople(data.results))
      .catch((error) => console.error(error));
  }, [id]);

  return <div>Test</div>;
}

export default PersonDetails;
