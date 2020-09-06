import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import { connect } from 'react-redux'
import {signOut} from '../store/authAction.js';

const NavigationAuth = (props) => (
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
        <a onClick={props.signOut}>Log Out</a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(NavigationAuth)