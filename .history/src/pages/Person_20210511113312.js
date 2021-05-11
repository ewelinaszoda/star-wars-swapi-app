import React from 'react'
import CharacterTable from '../components/CharacterTable'


const Person = () => {


  const Table = () => (
    <center>
      <TablePagination
        paginationCount={paginationCount}
        handleNewPage={handleNewPage}
        activePage={page} />
      <CharacterTable
        people={people />
    </center>
  )

  return (
    <div>
      
    </div>
  )
}

export default 