import React from 'react';
import spinner from '../spinner.gif'


function Spinner() {
    return (
        <div id="loading-spinner-div">
            <img id="loading-spinner" src={https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif} alt="Loading..." />
        </div>
    );
}

export default Spinner;