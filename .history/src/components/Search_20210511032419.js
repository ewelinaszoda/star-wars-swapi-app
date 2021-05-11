import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} */}
        Star Wars
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">People</Nav.Link>
          <Nav.Link href="#link">Planets</Nav.Link>
          <Nav.Link href="#link">Vehicles</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
 
    </>
  );
};

export default Navigation;