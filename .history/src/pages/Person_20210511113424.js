import React from 'react'
import CharacterTable from '../components/CharacterTable'


const Person = () => {

  const Table = () => (
    <center>
      <CharacterTable
        people={people} />
    </center>
  )

  return (
    <div>
          {loading ? <Spinner /> :
        <UserInterface />
      }
    </div>
  )
}

export default 