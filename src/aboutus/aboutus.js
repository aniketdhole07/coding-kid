import React from 'react'
import {Card,Button} from 'react-bootstrap'
import ani from "./img/aniket.jpeg"
import shri from "./img/shri.jpeg"
import mohit from "./img/mohit.jpeg"
import harsh from "./img/harsh.jpeg"
import parth from "./img/parth.jpg"
import "./aboutus.css"
const AboutUs=()=>{
	return(
           <div className="Row box">
           <div className="card">

           <Card> 
           <div> 
			<img src={ani} alt="aniket" />
           </div> 
            <Card.Header className="cb"> <h4>Aniket Dhole </h4></Card.Header>
            <Card.Body className="ani"> 
               <div>
                 <h6>Student At PCCOE </h6>
                 <h6> Contact: </h6>
                 <div className="row">
                 <a className="offset-2" href='https://www.linkedin.com/in/aniket-dhole-6680ab16a/'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                 <a className="offset-2" href='https://github.com/aniketdhole07'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                <a className="offset-2" href='https://www.instagram.com/aniketdhole7/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                 </div>
               </div>
            </Card.Body>
           </Card>

           </div>
           <div className="card">
           <Card> 


                   <div> 
			<img src={shri} alt="Shrishail" />
           </div>
            
            <Card.Header className="cb"> <h4> Shrishail kumbhar </h4></Card.Header>
            <Card.Body className="shri"> 
               <div>
                 <h6>Student At PCCOE </h6>
                 <h6> Contact: </h6>
                 <div className="row">
                 <a className="offset-2" href='https://www.linkedin.com/in/shrishail-kumbhar-554907190'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                 <a className="offset-2" href='https://github.com/shrishail735'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                <a className="offset-2" href='https://www.instagram.com/aniketdhole7/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                 </div>
               </div>
            </Card.Body>
           </Card>
           </div>
           <div className="card">
            <Card> 


                   <div> 
			<img src={mohit} alt="Mohit" />
           </div>
            
            <Card.Header className="cb"> <h4> Mohit Gandhi </h4></Card.Header>
            <Card.Body className="mg"> 
               <div>
                 <h6>Student At PCCOE </h6>
                 <h6> Contact: </h6>
                 <div className="row">
                 <a className="offset-2" href='https://www.linkedin.com/in/mohit-gandhi-296255170'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                 <a className="offset-2" href='https://github.com/MOHIT02082000'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                <a className="offset-2" href='https://www.instagram.com/mgandhi0208/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                 </div>
               </div>
            </Card.Body>
           </Card>
          </div>
          <div className="card">
          <Card> 

           <div> 
      <img src={harsh} alt="Harsh" />
           </div> 
            <Card.Header className="cb"> <h4>Harsh Singhal</h4></Card.Header>
            <Card.Body className="ani"> 
               <div>
                 <h6>Student At PCCOE </h6>
                 <h6> Contact: </h6>
                 <div className="row">
                 <a className="offset-2" href='https://www.linkedin.com/in/harsh-singhal-008a091a9'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                 <a className="offset-2" href='https://github.com/harshs-debugger'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                
                 </div>
               </div>
            </Card.Body>
           </Card>
           </div>
           

     <div className="card">
     <Card> 
           <div> 
      <img src={parth} alt="Parth" />
           </div> 
            <Card.Header className="cb"> <h4>Parth Shrivastava </h4></Card.Header>
            <Card.Body className="ani"> 
               <div>
                 <h6>Student At PCCOE </h6>
                 <h6> Contact: </h6>
                 <div className="row">
                 <a className="offset-2" href='https://in.linkedin.com/in/parth-shrivastava-a68a78178'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                 <a className="offset-2" href='https://github.com/parth30034'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                <a className="offset-2" href='https://www.instagram.com/parth_s202/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                 </div>
               </div>
            </Card.Body>
           </Card>
           </div>
            
          </div>
     
		)
}

export default AboutUs;