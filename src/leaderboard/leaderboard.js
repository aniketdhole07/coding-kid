import React from 'react'
import './leaderboard.css'
import {Link} from 'react-router-dom'
class leaderboard extends React.Component {
	render() {
		const {data}= this.props;
		//console.log(data);
		var names=[];
		var numH=[];
		var numM=[];
		var numE=[];
        for(var key in data)
		  {
		  	var name=[];
		    name.push(data[key]["name"]);
		    name.push(data[key]["solveH"].length);
		    name.push(data[key]["solveM"].length);
		    name.push(data[key]["solveE"].length);
		    name.push(data[key]["id"]);
		    var score=5*name[1]+3*name[2]+name[3];
		    name.unshift(score);
		    names.push(name);
		  }
		names.sort(function(a,b) {
		    return b[0]-a[0]
		});  
		//console.log(names);
		return (
			<div class="all">
			<section>
			  
			  <h1>Leaderboard</h1>
			  <div class="tbl-header">
			    <table cellpadding="0" cellspacing="0" border="0" align="center">
			      <thead>
			        <tr>
			          <th>Name</th>
			          <th>Easy</th>
			          <th>Medium</th>
			          <th>Hard</th>
			        </tr>
			      </thead>
			    </table>
			  </div>
			  <div class="tbl-content">
			    <table cellpadding="0" cellspacing="0" border="0">
			      <tbody>
			      {names.map(name=>{
					return(
					
					<tr>
			          <td><Link to={"/profile/"+name[5]} >{name[1]}</Link></td>
			          <td>{name[4]}</td>
			          <td>{name[3]}</td>
			          <td>{name[2]}</td>
			        </tr>
	                   
	                   )
	                }
	                )
            }

			        
			        
			      </tbody>
			    </table>
			  </div>
			</section>

			</div>
		)
	}
}
export default leaderboard

