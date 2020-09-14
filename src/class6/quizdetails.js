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

import Main from '../ide/comps/main';
import Sidebar from '../ide/comps/sidebar';

import { Container, Row,Nav,Accordion,Card,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { compose } from 'redux'
import "./quizdetails.css";
import $ from 'jquery';
import {updateSolved} from "../store/solvedAction.js";
import Idecontainer from './idecontainer.js';
const correct="Your Answer is correct";
const wrong="Your Answer is Wrong!!!";

class QuizDetails extends Component{
  

  
  state = {
    ans:'',
    id:this.props.match.params.id,
    quiz:'',
    uid:'',
    solve:'',
    solveH:'',
    solveM:'',
    solveE:'',
     ansd:'',
    ansclass:''
    
  } 
  onSignin = event => {
    event.preventDefault();
    if(this.props.uid)
      {if(this.state.ans==this.state.quiz.answer){
          
          this.setState({
            uid:this.props.uid,
            solve:this.props.solve,
            solveH:this.props.solveH,
            solveM:this.props.solveM,
            solveE:this.props.solveE,
             ansd:correct,
             ansclass:"correct"
          }, () => {
            //console.log(this.state,this.props);
            
            this.props.updateSolved(this.state);
          }); 
    
          
          
          
        }
        else{
          this.setState({
            ansd:wrong,
            ansclass:"wrong"
          })
        }}
        else{
          alert("Please Login To Submit Answer");
        }
    
    //console.log("hello",this.state);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
   
  
  render(){
  
 
  
  
  if (this.state.id<30) {
     
  this.state.quiz=quizsE[this.state.id];
  } else if(this.state.id<60){
    var ID=this.state.id-30;
    this.state.quiz=quizsM[ID];
    
  }
   else if(this.state.id<100){
    var ID=this.state.id-60;
    this.state.quiz=quizsH[ID];
    
  }
  
  
  return(
    <div>
      
           <div className="card container quiz bg">
          <div className="card-content">
            <span className="card-title">{this.state.quiz.title} </span>
            <p className="grey-text">{this.state.quiz.description} </p>

                          

            <form id="login" tabindex="500" onSubmit={this.onSignin}>
                
                <div>
                  <input name="ans" id="ans" onChange={this.onChange} type="text" />
                  <label>Type your Answer</label>
                </div>
                 <h6 className={this.state.ansclass}>{this.state.ansd}</h6>
                <div class="submit">
                  <button   className="btn btn-grn">Check Answer</button>
                </div>
                 
            </form>
                      <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} className="btn btn-primary" variant="button" eventKey="0">
                            Show Answer
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>{this.state.quiz.answer}</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} className="btn btn-danger" variant="button" eventKey="1">
                            Show Explanation
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>{this.state.quiz.explanation} </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
            
            
          </div>

         
      </div> 
          
        
      
      
      <Idecontainer/>
      </div>
  );
}
}


const mapDispatchToProps=(dispatch)=>{

  
  return{
    updateSolved:(data)=>dispatch(updateSolved(data))
  }
}
export default connect(null,mapDispatchToProps)(QuizDetails);