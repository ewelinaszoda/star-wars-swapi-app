import React from 'react';
import API from '../API';
import { Table } from 'react-bootstrap';

function PersonDetails({ people, personId }) {
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState('');
  const [birth_year, setBirth_year] = React.useState('');
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
      if (prevProps.personId !== id)
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
          <tr>
            <td className="cell-name">{name}</td>
            <td className="cell-birthday">{birth_year}</td>
            <td className="cell-height">{height}</td>
            <td className="cell-mass">{mass}</td>
            <td className="cell-homeworld">{homeworld}</td>
            <td>
              <ul className="cell-species">
                {species.map((s) => (
                  <li key={s.id}>
                    {s.amount} - {}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PersonDetails;
