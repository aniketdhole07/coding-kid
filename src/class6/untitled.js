import React from 'react'
import quizesE from '../ide/datajsons/E6.json'
import quizesM from '../ide/datajsons/M6.json'
import quizesH from '../ide/datajsons/H6.json'
import QuizSummary from './quizsummary'
import {Link} from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'

import { Container, Row,Col,Nav} from 'react-bootstrap'
import "./C6.css"
function C6() {
  return (
    <div>

    <h1>Class 6th</h1>
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Easy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Medium</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Hard</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {quizesE.map(quiz=>{
                return(
                   <Link to={"/class/"+quiz.id}>
                     <QuizSummary quiz={quiz}></QuizSummary>
                   </Link>
                )
              })}
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {quizesM.map(quiz=>{
                return(
                   <Link to={"/class/"+quiz.id}>
                     <QuizSummary quiz={quiz}></QuizSummary>
                   </Link>
                )
              })}
            </Tab.Pane>
          
          <Tab.Pane eventKey="third">
              {quizesH.map(quiz1=>{
                return(
                   <Link to={"/class/"+quiz1.id}>
                     <QuizSummary quiz={quiz1}></QuizSummary>
                   </Link>
                )
              })}
            </Tab.Pane>
            </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>

</div>
    
  )
}

export default C6






import React , { Component }  from'react'
import quizsE from '../ide/datajsons/E6.json'
import quizsM from '../ide/datajsons/M6.json'
import quizsH from '../ide/datajsons/H6.json'

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

import Main from '../ide/comps/main'
import Sidebar from '../ide/comps/sidebar'

import { Container, Row,Nav} from 'react-bootstrap'

import "./quizdetails.css"
const drawerWidth = 800;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));



const QuizDetails = (props)=>{
  var id=props.match.params.id;
  var quiz;

  var ans;
   
  
   
  if (id<30) {
    
  quiz=quizsE[id];
  } else if(id<60){
    
    quiz=quizsH[id];
  }
   else if(id<100){
    
    quiz=quizsM[id];
  }
  const classes = useStyles();
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
 
 

  return(
   <div>
    
      <div className="card container quiz bg">
          <div className="card-content">
            <span className="card-title">{quiz.title} </span>
            <p className="grey-text">{quiz.description} </p>

            
              
              

            <button className="btn btn-primary">Check Answer</button>
            <button className="btn btn-primary">Show Answer</button>
            <br></br>
            <button className="btn btn-danger">Show Explanation </button>
            
            <div className={classes.root}>
              <CssBaseline />
                  <button className="codebutton" onClick={handleDrawerOpen}>
                  Code
                  </button>
                
              
              <main
                className={clsx(classes.content, {
                  [classes.contentShift]: open,
                })}
              >
                <div className={classes.drawerHeader} />
                </main>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <Container id="ide" fluid>
                <Row>
                  
                    <Main />
                    <Sidebar />
                  
                </Row>
              </Container>
              </Drawer>
            </div>
          </div>

         
      </div>
      </div>
  )
}
export default QuizDetails;


//C6 updated


import React from 'react'
import quizesE from '../ide/datajsons/E6.json'
import quizesM from '../ide/datajsons/M6.json'
import quizesH from '../ide/datajsons/H6.json'
import QuizSummary from './quizsummary'
import {Link} from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'
import createquiz from "./createquiz.js"
import { connect } from 'react-redux'
import { Container, Row,Col,Nav} from 'react-bootstrap'
import { firestoreConnect} from  'react-redux-firebase'
import { compose } from 'redux'
import "./C6.css"
function C6({solved,uid}) {

{/*}
  
  for (var key in solved) {
    if (solved.hasOwnProperty(key)) {
        console.log(key,solved[key].name);
        for(var key1 in key){
          if (key.hasOwnProperty(key1)) {
          console.log(key1,key[key1]);
        }
    }
}
}
 */}

 var star = [];
  var solve= [];
  var numberofquizes = 500;     
  for (var i = 0; i < numberofquizes; i++) {
  star.push(false);
  solve.push(false);
  }
 for(var key in solved)
  {
    if(uid === solved[key]["id"])
    {
      solve=solved[key]["solved"]
      star=solved[key]["star"]
      console.log(solve);
     
    }
  }
 {/*
  var solveE6=solve.slice(0,30);
  var solveM6=solve.slice(30,60);
  var solveH6=solve.slice(60,100);
*/}

  return (
    <div>
    
    <h1>Class 6th</h1>
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Easy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Medium</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Hard</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {quizesE.map(quiz=>{
                return(
                   <Link to={"/class/"+quiz.id}>
                     <QuizSummary quiz={quiz} solve={solve[quiz.id]}></QuizSummary>
                   </Link>
                )
              })}
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {quizesM.map(quiz=>{
                return(
                   <Link to={"/class/"+quiz.id}>
                     <QuizSummary quiz={quiz} solve={solve[quiz.id]}></QuizSummary>
                   </Link>
                )
              })}
            </Tab.Pane>
          
          <Tab.Pane eventKey="third">
              {quizesH.map(quiz1=>{
                return(
                   <Link to={"/class/"+quiz1.id}>
                     <QuizSummary quiz={quiz1} solve={solve[quiz1.id]}></QuizSummary>
                   </Link>
                )
              })}
            </Tab.Pane>
            </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
     
</div>
    
  )
}

const mapStateToProps=(state)=>{

  console.log(state);
  return{
    solved: state.firestore.ordered.users,
    uid: state.firebase.auth.uid
  }
}
export default compose(

firestoreConnect([
    { collection: 'users' }
  ]),
  connect(mapStateToProps)
)(C6)