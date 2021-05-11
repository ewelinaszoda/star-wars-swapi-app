import React from 'react';
import {S}

const Spinner = () => {
  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Spinner;
