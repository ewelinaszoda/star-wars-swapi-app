import React from 'react';

function Spinner() {
  return (
    <div id="loading-spinner-div">
      <center>
        <img
          id="loading-spinner"
          src="https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif"
          alt="Loading..."
          style={{margin: '20px', width:'70%', border: ''}}
        />
      </center>
    </div>
  );
}

export default Spinner;
