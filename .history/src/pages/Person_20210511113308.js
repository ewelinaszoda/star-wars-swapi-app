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
        people={characterTable} />
    </center>
  )

  return (
    <div>
      
    </div>
  )
}

export default 