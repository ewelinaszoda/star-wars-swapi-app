import React from 'react';
import API from '../API';

function PersonDetails({people}) {
  const [id, setId] = React.useState(0);
  const [id, setId] = React.useState(0);


  React.useEffect(() => {
    API.fetchPersonDetails()
      .then((data) => setPeople(data.results))
      .catch((error) => console.error(error));
  }, [id]);

  return <div>Test</div>;
}

export default PersonDetails;
