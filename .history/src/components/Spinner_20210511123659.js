import React from 'react';

function Spinner() {
  return (
    <div id="loading-spinner-div">
      <center>
        <img
          id="loading-spinner"
          src="https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif"
          alt="Loading..."
          style={{margin: '20px', width:'30%', border: '1px solid black'}}
        />
      </center>
    </div>
  );
}

export default Spinner;
