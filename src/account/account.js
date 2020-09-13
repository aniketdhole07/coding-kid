import React from 'react'
import $ from 'jquery';
import './account.css';
import quizesE from '../ide/datajsons/E6.json'
import quizesM from '../ide/datajsons/M6.json'
import quizesH from '../ide/datajsons/H6.json'

import {Link} from 'react-router-dom'
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
		console.log(solveE,solveM,solveH);
			var tabs =  $(".tabs li a");
		  
			tabs.click(function() {
				var content = this.hash.replace('/','');
				tabs.removeClass("active");
				$(this).addClass("active");
		    $("#content").find('p').hide();
		    $(content).fadeIn(200);
			});

		
		return (
			<div>
				<h1>Hello {name}</h1>
				<div class="wrap">
  
					  <ul class="tabs group">
					    <li><a class="active" href="#/easy">Easy</a></li>
					    <li><a href="#/medium">Medium</a></li>
					    <li><a href="#/hard">Hard</a></li>
					  </ul>
					  
					  <div id="content">
					  <ul>
					  {solveE.map(quiz=>{
		                return(
		                   <Link to={"/class/"+quiz.id}>
		                      <p id="easy" class="med">{quiz.title}</p>
		                   </Link>
		                )
		              })}
		              </ul>
		              <ul>
					    {solveM.map(quiz=>{
		                return(
		                   <Link to={"/class/"+quiz.id}>
		                      <p id="medium" class="med">{quiz.title}</p>
		                   </Link>
		                )
		              })}
					    </ul>
		              {solveH.map(quiz=>{
		                return(
		                   <Link to={"/class/"+quiz.id}>
		                      <p id="hard">{quiz.title}</p>
		                   </Link>
		                )
		              })}
					     </div>
					  
					</div>
			</div>
		)
	}
}

export default account