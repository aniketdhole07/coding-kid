import React from 'react';
import Main from './comps/main'
import Sidebar from './comps/sidebar'
import './styles/main.scss'
import './Ide.css'
import Card from 'react-bootstrap/Card'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {Link } from "react-router-dom";

import ButtonBase from '@material-ui/core/ButtonBase';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Row,Nav} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'

import how from "./how.png";
import ContactUs from  '../contactus/contactus.js'
import Howitworks from './howitworks/howitworks.js'
export default function PersistentDrawerRight() {
  
  return (
      <div>
        
        <div className="nvbar">
        <h1 className="heading"> <span>Welcome to Coding-Kid</span> </h1>
        <h5 align="center" className="desp"><span> Learn Coding by Solving Puzzles</span></h5>
        <div className="crd">


        <Link to="../class6">
          <div class="card6">
            <div class="card-image6"></div>
              <div class="card-text">
                <span class="date"></span>
                <h2>Class 6th</h2>
                <ul>
                  <li>Algebraic Puzzles</li>
                  <li>Arrays,Strings</li>
                  <li>Loops</li>
                </ul>
              </div>
          </div>
        </Link>
        <Link to="../class7">
          <div class="card7">
            <div class="card-image7"></div>
              <div class="card-text">
                <span class="date"></span>
                <h2>Class 7th</h2>
                <ul>
                  <li>Linear Geometry</li>
                  <li>Equations</li>
                  <li>Number theory</li>
                  <li>Searching Algorithms</li>
                </ul>
              </div>
          </div>
        </Link>
        <Link to="../class8">
          <div class="card8">
            <div class="card-image8"></div>
              <div class="card-text">
                <span class="date"></span>
                <h2>Class 8th</h2>
                <ul>
                  <li>2D Geometry</li>
                  <li>Graphs</li>
                  <li>Trees</li>
                  <li>Sorting Algorithms</li>
                </ul>
              </div>
          </div>
        </Link>
        <Link to="../class9">
          <div class="card9">
            <div class="card-image9"></div>
              <div class="card-text">
                <span class="date"></span>
                <h2 className="headingtext">Class 9th</h2>
                <ul>
                  <li>Classical Algorithms</li>
                  <li>Combinatrics</li>
                  <li>Probability</li>
                  <li>Topological Puzzles</li>
                </ul>
              </div>
          </div>
        </Link>
        <Link to="../class10">
          <div class="card10">
            <div class="card-image10"></div>
              <div class="card-text">
                <span class="date"></span>
                <h2 >Class 10th</h2>
                <ul>
                  <li>Dynamic Programming</li>
                  <li>Game Theory</li>
                  <li>Cryptography</li>
                  <li>Real-World Puzzles</li>
                </ul>
              </div>
          </div>
        </Link>




     </div>
    
       <div>
           <Howitworks/>
           <ContactUs />
         </div>    
      </div>
      </div>
  );
}

