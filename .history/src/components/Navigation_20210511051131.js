import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.png';
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';

const Navigation = () => {
  // const location = useLocation();

  const renderSearch = () => {
    // if (location.pathname === '/')
    return (
      <>
        <Form inline className="mr-xs-none">
          <FormControl
            type="text"
            placeholder="Search for character..."
            className="mr-sm-2"
          />
          <Button
            variant="outline-info"
          >
            Search
          </Button>
        </Form>
      </>
    );
    // else return <></>;
  };

  return (
    // To improve: Search bar will disappear for small device
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="Star Wars logo"
            src={logo}
            width="50"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/people">People</Nav.Link>
            <Nav.Link href="#link">Planets</Nav.Link>
            <Nav.Link href="#link">Vehicles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {renderSearch()}
      </Navbar>
    </>
  );
};

export default Navigation;
