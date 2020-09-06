import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import NavigationAuth from './NavigationAuth.js';
import NavigationNonAuth from './NavigationNonAuth.js'
import {connect} from 'react-redux';

const Navigation = (props) => {
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <NavigationAuth /> : <NavigationNonAuth />;

  return (
    
      <div>
        {links}
      </div>
    
  )
}





const mapStateToProps = (state)=>{
  console.log(state);
  return{
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navigation);


