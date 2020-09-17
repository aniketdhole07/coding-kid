import React,{Component} from 'react'
import {ProgressBar} from 'react-bootstrap';
import Easy from '../ide/datajsons/E6.json'
import Medium from '../ide/datajsons/M6.json'
import Hard from '../ide/datajsons/H6.json'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./showprofile.css"
class showProfile extends Component{
	render(){

	     const {data}=this.props;
	     //console.log(data)
	     var easy=Easy.length;
	     var med=Medium.length;
	     var hard=Hard.length;
	     var tq=easy+med+hard;
		const id=this.props.match.params.id;
		var name;
		var mail;
		var En;
		var HN;
		var Mn;
		var total;
		 for(var i in data){
		 	if(data[i]["id"]==id)
		 	{
		 		name=data[i]["name"];
		 		mail=data[i]["email"];
		 		HN=data[i]["solveH"].length;
		        Mn=data[i]["solveM"].length;
		        En=data[i]["solveE"].length;
		        total=HN+Mn+En;
		        En=Math.round(En*100/easy);
		        Mn=Math.round(Mn*100/med);
		        HN=Math.round(HN*100/hard);
		        var tot=Math.round(total*100/tq);
		 	}
		 }
		return(
             <div className="show">
              <h2>{name}</h2>
              <p>Email- {mail}</p>
              <p>Total Quetions solved-{total}/{tq}</p>
               <p>Easy<ProgressBar variant="success" animated now={En} label={`${En}%`} /></p>
                 <p>Medium<ProgressBar variant="warning" min={0} animated now={Mn} label={`${Mn}%`} /></p>
               <p>Hard<ProgressBar variant="danger" animated now={HN} label={`${HN}%`} /></p>
               <div className="back">
               <div className="box">
               <p> Overall Performance </p>
               </div>
               <div className="box">
               <div className="circular">
                <CircularProgressbar  strokeWidth={4} value={tot} text={`${tot}%`} />
              </div>
              </div>
              </div>
	
   
	
           </div>
   			);
	}
}
export default showProfile;
