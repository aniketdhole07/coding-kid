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
function C6({projects}) {


  var anyBoxesChecked = [];
  var numeroPerguntas = 500;     
  for (var i = 0; i < numeroPerguntas; i++) {
    anyBoxesChecked.push(false);
  }
  console.log(
  {projects}
);

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

const mapStateToProps=(state)=>{

  //console.log(state);
  return{
    projects: state.firestore
  }
}
export default compose(

firestoreConnect([
    { collection: 'quiz' }
  ]),
  connect(mapStateToProps)
)(C6)