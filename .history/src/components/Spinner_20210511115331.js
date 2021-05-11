import React from 'react';
import spinner from '../spinner.gif'


function Spinner() {
    return (
        <div id="loading-spinner-div">
            <img id="loading-spinner" src={spin} alt="Loading..." />
        </div>
    );
}

export default Spinner;