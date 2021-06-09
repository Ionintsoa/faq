import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom'
import './Header.css';

const validate = values => {
  const errors:any = {};
  if (!values.query) {
    errors.query = 'Required';
  } 
  return errors;
};

function Header() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      query: ''
    },
    validate,
    onSubmit: (values) => {
      history.push({
        pathname: "/questions",
        query: values.query
      });
    },
  });

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/" className="menu-link">FAQ</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/ask" className="menu-link">Ask a question</Link>
          </Nav>
          <Form inline onSubmit={formik.handleSubmit}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" name="query" id="query" onChange={formik.handleChange} value={formik.values.query} />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
