import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = () => {
  return (
    <>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" style />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
};

export default Search;
