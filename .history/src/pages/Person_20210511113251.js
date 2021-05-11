import React from 'react'
import CharacterTable from '../components/'


const Person = () => {


  const Table = () => (
    <center>
      <TablePagination
        paginationCount={paginationCount}
        handleNewPage={handleNewPage}
        activePage={page} />
      <CharacterTable
        characterTable={characterTable} />
    </center>
  )

  return (
    <div>
      
    </div>
  )
}

export default 