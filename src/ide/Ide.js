import React from 'react';
import Main from './comps/main'
import Sidebar from './comps/sidebar'
import './styles/main.scss'


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

import { Container, Row} from 'react-bootstrap'

const drawerWidth = 800;
const c6 = [
  {
    url: 'https://i.ibb.co/SXjWH89/6.png',
    title: 'Class 6th',
    width: '33%',
  }
];
const c7= [
  {
    url: 'https://i.ibb.co/ysvJcgQ/7.png',
    title: 'Class 7th',
    width: '33%',
  }
];
const c8 = [
  {
    url: 'https://i.ibb.co/J2X4zrg/8.png',
    title: 'Class 8th',
    width: '33%',
  }
];
const c9= [
  {
    url: 'https://i.ibb.co/zrVpmpr/9.png',
    title: 'Class 9th',
    width: '33%',
  }
];
const c10 = [
  {
    url: 'https://i.ibb.co/SJ5x0R6/10.png',
    title: 'Class 10th',
    width: '33%',
  }
];

  
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


const useStylesImg = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    
  },
  image: {
    position: 'top',
    height: 150,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.05,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.black,
  },
  imageSrc: {
    position: 'absolute',
    left: 60,
    right: 60,
    top: 10,
    bottom: 10,

    width: "auto",
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.black,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const classesImg = useStylesImg();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Coding-Kid
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <h1> Hello </h1>
        <Link to="../class6">
        <div className={classesImg.root}>
        
      {c6.map((image) => (
        
        <ButtonBase
          focusRipple
          key={image.title}
          className={classesImg.image}
          focusVisibleClassName={classesImg.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classesImg.imageSrc}
            style={{
              
              backgroundImage: `url(${image.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              
            }}
          />
          <span className={classesImg.imageBackdrop} />
          <span className={classesImg.imageButton}>
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              className={classesImg.imageTitle}
              fontWeight="fontWeightBold"
              m={1}
            >
              {image.title}
              <span className={classesImg.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        
      ))}

    </div>
    </Link>
    <Link to="../class7">
    <div className={classesImg.root}>
      {c7.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classesImg.image}
          focusVisibleClassName={classesImg.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classesImg.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
              
            }}
          />
          <span className={classesImg.imageBackdrop} />
          <span className={classesImg.imageButton}>
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              className={classesImg.imageTitle}
            >
              {image.title}
              <span className={classesImg.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    </Link>
    
    <Link to="../class8">
    <div className={classesImg.root}>
      {c8.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classesImg.image}
          focusVisibleClassName={classesImg.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classesImg.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
              
            }}
          />
          <span className={classesImg.imageBackdrop} />
          <span className={classesImg.imageButton}>
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              className={classesImg.imageTitle}
            >
              {image.title}
              <span className={classesImg.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    </Link>
    
    <Link to="../class9">
    <div className={classesImg.root}>
      {c9.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classesImg.image}
          focusVisibleClassName={classesImg.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classesImg.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
              
            }}
          />
          <span className={classesImg.imageBackdrop} />
          <span className={classesImg.imageButton}>
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              className={classesImg.imageTitle}
            >
              {image.title}
              <span className={classesImg.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    </Link>

    <Link to="../class10">
    <div className={classesImg.root}>
      {c10.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classesImg.image}
          focusVisibleClassName={classesImg.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classesImg.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
              
            }}
          />
          <span className={classesImg.imageBackdrop} />
          <span className={classesImg.imageButton}>
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              className={classesImg.imageTitle}
            >
              {image.title}
              <span className={classesImg.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    </Link>
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
  );
}

