import React from 'react';
import API from '../API';

function PersonDetails({ people }) {
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState('');
  const [birth_year,  setBirth_year] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [mass, setMass] = React.useState('');
  const [homeworld, setHomeworld] = React.useState('');
  const [species, setSpecies] = React.useState([]);

  const getData = (data) => {
    setId = data.id;
    setName = data.name;
    setBirth_year = data.birth_year;
    setHeight = data.height;
    setMass = data.mass;
    setHomeworld = data.homeworld;
    setSpecies = data.species;
  };

  React.useEffect(() => {
    API.fetchPersonDetails()
      .then((data) => getData(data))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(
    (prevProps) => {
      if (prevProps.id !== id)
        API.fetchPersonDetails(id)
          .then((data) => getData(data))
          .catch((error) => console.error(error));
    },
    [id]
  );

  return (
    <div id="character-table">
        <Table id="table" hover striped>
            <thead id="character-table-header">
                <tr>
                    <th className="cell-name">Name</th>
                    <th className="cell-birthday">D.o.B</th>
                    <th className="cell-height">Height</th>
                    <th className="cell-mass">Mass</th>
                    <th className="cell-homeworld">Homeworld</th>
                    <th className="cell-species">Species</th>
                </tr>
            </thead>
            <tbody id="character-table-body">
                {props.characterTable.map((character, index) => (
                    <tr key={index}>
                        <td className="cell-name">{cname}</td>
                        <td className="cell-birthday">{character.birth_year}</td>
                        <td className="cell-height">{character.height}</td>
                        <td className="cell-mass">{character.mass}</td>
                        <td className="cell-homeworld">{character.homeworld}</td>
                        <td className="cell-species">{character.species}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
)
}

export default PersonDetails;
