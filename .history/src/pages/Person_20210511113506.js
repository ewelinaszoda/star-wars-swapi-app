import React from 'react';
import CharacterTable from '../components/CharacterTable';

const Person = () => {
  const Table = () => (
    <center>
      <CharacterTable person={person} />
    </center>
  );

  return <div>{loading ? <Spinner /> : <Table />}</div>;
};

export default Person;
