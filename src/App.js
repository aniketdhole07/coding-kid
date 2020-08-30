import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Ide from './ide/Ide.js';
import C6 from './class6/C6.js';
import C7 from './class7/C7.js';
import C8 from './class8/C8.js';
import C9 from './class9/C9.js';
import C10 from './class10/C10.js';
import QuizDetails from './class6/quizdetails.js'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Row,Nav} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
function App() {
  return (

    <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" class="bg-custom" fixed="top">
          <Navbar.Brand href="#home">Coding-Kid</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pro">Pro Version</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Leaderboard</Nav.Link>
              <Nav.Link  href="#memes">
                User
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      <Switch>
      
      <Route path="/class6"  component={C6} />
      <Route path="/class7"  component={C7} />
      <Route path="/class8"  component={C8} />
      <Route path="/class9"  component={C9} />
      <Route path="/class10" component={C10} />
      <Route path="/class/:id" component={QuizDetails}></Route>
        <Route exact path="/" excat component={Ide} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>    
  );
}

export default App;