import React from 'react'

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
export default function Person() {
  return (
    <div>
      
    </div>
  )
}
