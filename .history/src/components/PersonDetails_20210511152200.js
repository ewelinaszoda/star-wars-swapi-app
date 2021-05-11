import React from 'react'

function PersonDetails(people) {

  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    getPeople();
    getPlanets();
    getStarships();
  }, [id]);

  const getPeople = () => {
    API.fetchAllPeople()
      .then((data) => setPeople(data.results))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      Test
    </div>
  )
}

export default PersonDetails
