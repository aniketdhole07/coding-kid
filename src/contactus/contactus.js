import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createFeedback } from '../store/feedbackAction.js'
import {Modal,Row,Col,Container,Button} from 'react-bootstrap'
import {Redirect,withRouter} from 'react-router-dom'
import "./contactus.css"
class ContactUS extends Component {
   state={
    fname:'',
    lname:'',
    mail:'',
    feedback:'',
    flag:true
   }
   handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
    
   };

   handleSubmit=(e)=>{
    this.clearForm()
    e.preventDefault();
    if(this.state.fname!=''&&this.state.mail!=''&&this.state.feedback!='')
     { //console.log(this.state.mail);
        this.setState({
       flag:true
    },()=>{
      this.props.createFeedback(this.state);
        alert("feedback send successfully!!!!!");
          //console.log(e);
      
    });
        
       
   }

 }
 clearForm=()=>{
  document.getElementById("myform").reset();
 }
   render(){
    if(this.flag)
    {
      this.setState({
        flag:false
      },()=>{
        //console.log(this.flag)
          return(
         <Redirect to='/' />
        )
        });
    
    }
  return(
  <div className="container">
  <form type="submit" onSubmit={this.handleSubmit} id='myform'>
    <h3>ContactUS</h3>
    <div className="horiz">
    <div>
    <label for="fname">First Name</label>
    <input type="text" value={this.fname} required id="fname" name="fname" placeholder="Your name.." onChange={this.handleChange} />
    </div>
    <div>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" value={this.lname} name="lname" placeholder="Your last name.." onChange={this.handleChange} />
    </div>
    </div>
    <label for="email">Email</label>
    <input type="email" id="email" required value={this.mail} name="mail" placeholder="Your Email.." onChange={this.handleChange} />


    <label for="feedback">Feedback</label>
    <textarea id="feedback" required name="feedback" value={this.feedback} onChange={this.handleChange} placeholder="How can we help.."></textarea>
    
     {this.err==' '?<h6>{this.err}</h6>:null}
    <Button type="submit">Submit</Button>

  </form>
</div> 
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createFeedback: (feedback) => dispatch(createFeedback(feedback))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ContactUS));
