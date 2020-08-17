import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">POKEMON</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="dark">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
