import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import {connect} from 'react-redux';

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
)

export default NavigationNonAuth