import React from 'react';
import CharacterTable from '../components/CharacterTable';

const Person = () => {
  const Table = () => (
    <center>
      <CharacterTable person={people} />
    </center>
  );

  return <div>{loading ? <Spinner /> : <Table />}</div>;
};

export default Person;
