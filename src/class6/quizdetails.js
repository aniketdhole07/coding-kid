import React from'react'
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
   
  if (id<100) {
    id=id-1;
  quiz=quizsE[id];
  } else if(id<200){
    id=id-101;
    quiz=quizsH[id];
  }
   else if(id<300){
    id=id-201;
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