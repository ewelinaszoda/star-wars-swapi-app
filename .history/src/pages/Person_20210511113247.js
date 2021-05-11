import React from 'react'
import CharacterTable from '../'


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