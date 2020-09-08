 import React, { Component } from 'react';
import { Link, withRouter,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../store/authAction.js'
import {signUp} from '../store/authAction.js'
import { withFirebase } from '../firebase';
import "./Signin.css";
import $ from 'jquery';


class SignUpFormBase extends Component {

  
  state = {
    name: '',
    email: '',
    password: '',
    email_si: '',
    password_si: ''
  }
  

  onSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state);
  };
  
  onSignin = event => {
    event.preventDefault();
    this.props.signIn(this.state);

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {

    const { auth,authError}=this.props;
    if (auth.uid) return <Redirect to='/' /> 
    $(document).ready(function(){
      $(".veen .rgstr-btn button").click(function(){
        $('.veen .wrapper').addClass('move');
        $('.body').css('background','#f7ae40');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

      });
      $(".veen .login-btn button").click(function(){
        $('.veen .wrapper').removeClass('move');
        $('.body').css('background','#c5ff31');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
      });
    });
    return (
    <div>
        <script  src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" ></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        <div class="body">
          <div class="veen">
            <div class="login-btn splits">
              <p>Already an user?</p>
              <button class="active">Login</button>
            </div>
            <div class="rgstr-btn splits">
              <p>Don't have an account?</p>
              <button>Register</button>
            </div>

            <div class="wrapper">
              <form id="login" tabindex="500" onSubmit={this.onSignin}>
                <h3>Login</h3>
                <div class="mail">
                  <input name="email_si" id="email_si" onChange={this.onChange} type="text" />
                  <label>Mail or Username</label>
                </div>
                <div class="passwd">
                  <input name="password_si" id="password_si" onChange={this.onChange} type="password" />
                  <label>Password</label>
                </div>
                <div class="submit">
                  <button  class="dark">Login</button>
                </div>
                 { authError ? <p>{authError}</p> : <script> return <Link to='/' /> </script>  }
              </form>

              <form id="register" tabindex="502" onSubmit={this.onSubmit}>
                <h3>Register</h3>
                <div class="name">
                  <input type="text" name="name"  onChange={this.onChange} />
                  <label>Full Name</label>
                </div>
                <div class="email">
                  <input type="text" name="email"  onChange={this.onChange}/>
                  <label>Mail</label>
                </div>
                <div class="password">
                  <input type="password" name="password"  onChange={this.onChange}/>
                  <label>Password</label>
                </div>
                <div class="submit">
                  <button  class="dark">Register</button>
                </div>
                 { authError ? <p>{authError}</p> : null }
                
              </form>
          </div>
          </div>  
        </div>

    
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps=(dispatch)=>{

  //console.log(state);
  return{
    signIn:(creds)=>dispatch(signIn(creds)),
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpFormBase);

