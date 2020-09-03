import React from 'react'
import quizesE from '../ide/datajsons/E10.json'
import quizesM from '../ide/datajsons/M10.json'
import quizesH from '../ide/datajsons/H10.json'
import QuizSummary from './quizsummary'
import {Link} from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'
import { Container, Row,Col,Nav} from 'react-bootstrap'
import "./C10.css"
function C10() {
	return (
    <div>
    <h1>Class 10th</h1>
    <p>Dynamic programming is a method of solving problems, which is used in computer science, mathematics and economics. Using this method, a complex problem is split into simpler problems, which are then solved. At the end, the solutions of the simpler problems are used to find the solution of the original complex problem.</p>
    <p>Game theory is the study of how and why people make decisions. (Specifically, it is "the study of mathematical models of conflict and cooperation between intelligent rational decision-makers".)</p>
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
          </Tab.Content>
          <Tab.Pane eventKey="third">
              {quizesH.map(quiz1=>{
                return(
                   <Link to={"/class/"+quiz1.id}>
                     <QuizSummary quiz={quiz1}></QuizSummary>
                   </Link>
                )
              })}
            </Tab.Pane>
        </Col>
      </Row>
      </Tab.Container>

</div>
    
	)
}

export default C10

