import React from 'react'
import './leaderboard.css'
class leaderboard extends React.Component {
	render() {
		const {data}= this.props;
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
		    var score=5*name[1]+3*name[2]+name[3];
		    name.unshift(score);
		    names.push(name);
		  }
		names.sort(function(a,b) {
		    return b[0]-a[0]
		});  
		console.log(names);
		return (
			<div class="all">
			<h2 class="h"> LeaderBoard </h2>
			<div class="ind">
            <span class="nm1">Name</span>  <span class="sc1">Easy Medium Hard </span>
            </div>
			<div class="lb">
				{
					names.map(name=>{
					return(
					<div>
                   <span class="nm">{name[1]}</span>  <span class="sc">{name[4]} {name[3]} {name[2]} </span>
                   </div>
                   )
                }
                )
            }
            
            </div>
			</div>
		)
	}
}
export default leaderboard

{/*names.push(data[key]["name"]);
		    numH.push(data[key]["solveH"].length);
		    numM.push(data[key]["solveM"].length);
		    numE.push(data[key]["solveE"].length);


		    names.map(name=>{
					return(
                   <p>{name} </p>
                   )
                }
                )*/}











@import 'https://fonts.googleapis.com/css?family=Ubuntu';



.all {
	min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
	font-family: 'Ubuntu', 'Microsoft JhengHei', Arial, sans-serif;
	letter-spacing: 1px;
	background: #2c88f2;
	/*background: linear-gradient(to right top, #CC95C0, #DBD4B4,#7AA1D2);*/
	background: linear-gradient(to top, #34ebe9, #d0ffae);
	text-align: center;
}
.h{
	margin-top:100px;
}
.lb {
	background-color: #123;
	color: #eee;
	width: 600px;
	border-radius: 5px;
	margin-top:10px;
	box-shadow: 2px 5px 15px rgba(17, 34, 51, 0.5);
	
	display: inline-block;
	vertical-align: middle;
}
.nm{
	margin-right: 120px;
}
.sc{
	word-spacing: 40px;
}
.nm1{
	margin-right: 120px;
	margin-left: -50px
}
.sc1{
	word-spacing: 10px;
}
.ind{
	margin-left: 120px;
}
@media only screen and (max-width: 700px) {
  .all {
	min-height: 100%;
  min-width: 200px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
	font-family: 'Ubuntu', 'Microsoft JhengHei', Arial, sans-serif;
	letter-spacing: 1px;
	background: #2c88f2;
	
	background: linear-gradient(to bottom, #CC95C0, #DBD4B4,#7AA1D2);
	text-align: center;
}
    .h{
	margin-top:80px;
}
.lb {
	background-color: #123;
	color: #eee;
	width: 300px;
	border-radius: 5px;
	margin-top:10px;
	box-shadow: 2px 5px 15px rgba(17, 34, 51, 0.5);
	text-align: left;
	display: inline-block;
	vertical-align: middle;
	margin-top: 20px;
}

}

                