import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"
import SignOutButton from '../signin/Signout.js';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'


const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" class="bg-custom" fixed="top">
    <Navbar.Brand href="/" className="navbar1">Coding-Kid</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        
      </Nav>
      <Nav>
        <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
        <Nav.Link  href="/account">
          Account
        </Nav.Link>
        <SignOutButton/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const NavigationNonAuth = () => (
 <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" class="bg-custom navbar2" fixed="top">
    <Navbar.Brand href="/" className="navbar1">Coding-Kid</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        
      </Nav>
      <Nav>
        <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
        <Nav.Link  href="/signin">
          Sign In/Register
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;


