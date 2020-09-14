import React from 'react'
import $ from 'jquery';
import './account.css';
import quizesE from '../ide/datajsons/E6.json'
import quizesM from '../ide/datajsons/M6.json'
import quizesH from '../ide/datajsons/H6.json'
import Tab from 'react-bootstrap/Tab'
import {Link} from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
class account extends React.Component {
	render() {
		var solveH=[];
		var solveM=[];
		var solveE=[];
        var name=this.props.name;
        var idH=this.props.solveH;
        var idM=this.props.solveM;
        var idE=this.props.solveE;

        for (var i = 0; i < idH.length; i++) {
			    solveH.push(quizesH[idH[i]-60]);	 
		}
		for (var i = 0; i < idM.length; i++) {
			    solveM.push(quizesM[idM[i]-30]);	 
		}
		for (var i = 0; i < idE.length; i++) {
			    solveE.push(quizesE[idE[i]]);	 
		}
		//console.log(solveE,solveM,solveH);
	
		
		return (

			<div>
			<h2>Hello {name} </h2>
			<div className="tb">
			<Tabs defaultActiveKey="profile"  >
			  <Tab eventKey="easy" title="Easy">
			    {solveE.map(quiz=>{
		                return(
		                   <Link to={"/class/"+quiz.id}>
		                      <p id="easy" class="med">{quiz.title}</p>
		                   </Link>
		                )
		              })}
			  </Tab>
			  <Tab eventKey="medium" title="Medium">
			    {solveM.map(quiz=>{
		                return(
		                   <Link to={"/class/"+quiz.id}>
		                      <p id="medium" class="med">{quiz.title}</p>
		                   </Link>
		                )
		              })}
			  </Tab>
			  <Tab eventKey="hard" title="Hard">
			    {solveH.map(quiz=>{
		                return(
		                   <Link to={"/class/"+quiz.id}>
		                      <p id="hard">{quiz.title}</p>
		                   </Link>
		                )
		              })}
			  </Tab>
			</Tabs>
				</div>
			</div>
		)
	}
}

export default account