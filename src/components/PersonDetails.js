import React from 'react';
import API from '../API';
import { Table } from 'react-bootstrap';

function PersonDetails(props) {
  // const [id, setId] = React.useState(0);
  const [name, setName] = React.useState('');
  const [birth_year, setBirth_year] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [mass, setMass] = React.useState('');
  const [homeworld, setHomeworld] = React.useState('');
  const [species, setSpecies] = React.useState([]);
  // const [homeworldInfo, setHomeworldInfo] = React.useState({});

  // const getHomewordInfo = (url) => {
  //   API.fetchInfo(url)
  //     .then((data) => setHomeworldInfo(data))
  //     .catch((error) => console.error(error));
  // };

  // React.useEffect(() => {
  //   getHomewordInfo();
  // }, [{homeworld}]);

  const getData = (data) => {
    // setId(data.id);
    setName(data.name);
    setBirth_year(data.birth_year);
    setHeight(data.height);
    setMass(data.mass);
    setHomeworld(data.homeworld);
    setSpecies(data.species);
  };

  React.useEffect(() => {
    const id = props.match.params.id;
    API.fetchPersonDetails(id)
      .then((data) => getData(data))
      .catch((error) => console.error(error));
  }, [props.match.params.id]);

  return (
    <div style={{ marginTop: '40px' }}>
      <Table variant="dark" hover striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>D.o.B</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Homeworld</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{birth_year}</td>
            <td>{height}</td>
            <td>{mass}</td>
            {/* how to fetch homeworld */}
            {/* <td className="cell-homeworld">{getHomewordInfo(homeworld)}</td> */}
            <td>{homeworld}</td>
            {/* how to fetch homeworld */}
            <td>
              <ul
                className="cell-species"
                style={{ listStyleType: 'none', padding: '0' }}
              >
                {species.map((s, index) => (
                  <li key={index}>{s}</li>
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
