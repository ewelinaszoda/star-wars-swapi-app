import React from 'react'

function PersonDetails(people) {

  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    getPeople();
    getPlanets();
    getStarships();
    setLoading(false);
  }, []);
  
  return (
    <div>
      Test
    </div>
  )
}

export default PersonDetails
