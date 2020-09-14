import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Ide from './ide/Ide.js';
import C6 from './class6/C6.js';
import C7 from './class7/C7.js';
import C8 from './class8/C8.js';
import C9 from './class9/C9.js';
import C10 from './class10/C10.js';
import Navigation from "./navigation/Navigation.js";
import QuizDetails from './class6/quizdetails.js'

import AboutUs from './aboutus/aboutus.js'
import Leaderboard from './leaderboard/leaderboard.js'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SignUpPage from './signin/Signin.js';
import { firestoreConnect} from  'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Account from './account/account.js'
class App extends Component {
 
   

  render(){

  const {data,uid}=this.props;
  //console.log(data);
  var star = [];
  var solve= [];
  var solveH=[];
  var solveM=[];
  var solveE=[];
  var name='';
  var numberofquizes = 500;     
  for (var i = 0; i < numberofquizes; i++) {
  star.push(false);
  solve.push(false);
  }
 for(var key in data)
  {
    if(uid === data[key]["id"])
    {
      solve=data[key]["solved"];
      star=data[key]["star"];
      name=data[key]["name"];
      solveH=data[key]["solveH"];
      solveM=data[key]["solveM"];
      solveE=data[key]["solveE"];
    }
  }
  
    return (
      <div>
    <Navigation/>
    <BrowserRouter>
      
      
      <Switch>
      
      <Route path="/class6"  excat render={() => <C6 solve={solve} star={star} />} />
      <Route path="/class7"  excat component={C7} />
      <Route path="/class8"  excat component={C8} />
      <Route path="/class9" excat  component={C9} />
      <Route path="/class10" excat component={C10} />
      <Route path="/signin" excat component={SignUpPage} />
      <Route path="/leaderboard" excat render={() => <Leaderboard data={data} />} />
      <Route path="/account" excat render={() => <Account name={name} solveE={solveE} solveM={solveM} solveH={solveH} />} />
      
      <Route path="/about" component={AboutUs} />
      <Route path="/class/:id" excat render={props => <QuizDetails {...props} solve={solve} solveE={solveE} solveM={solveM} solveH={solveH} uid={uid}/>}></Route>
        <Route exact path="/" excat component={Ide} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>    
    </div>
  );
  }
  
}




const mapStateToProps=(state)=>{

  if (state.firestore.ordered.users){
    return{
    data: state.firestore.ordered.users,
    uid: state.firebase.auth.uid
  }
  }
  else{
    return{}
  }
  
}

export default compose(

firestoreConnect([
    { collection: 'users' }
  ]),
  connect(mapStateToProps)
)(App);
     