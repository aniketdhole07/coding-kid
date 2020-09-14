 import React, { Component } from 'react';
import { Link, withRouter,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../store/authAction.js'
import {signUp} from '../store/authAction.js'
import { withFirebase } from '../firebase';
import "./Signin.sass";
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
    //console.log("hello1");
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
    window.onload=function(){
      const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      userForms = document.getElementById('user_options-forms')

     
      signupButton.addEventListener('click', () => {
        userForms.classList.remove('bounceRight')
        userForms.classList.add('bounceLeft')
      }, false)

      
      loginButton.addEventListener('click', () => {
        userForms.classList.remove('bounceLeft')
        userForms.classList.add('bounceRight')
      }, false)
    }  
    
     
    return (
    <div class="al">

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
     <section class="user">
          <div class="user_options-container">
            <div class="user_options-text">
              <div class="user_options-unregistered">
                <h2 class="user_unregistered-title">Don't have an account?</h2>
                <button class="user_unregistered-signup" id="signup-button">Sign up</button>
              </div>

              <div class="user_options-registered">
                <h2 class="user_registered-title">Already an user?</h2>
                 <button class="user_registered-login" id="login-button">Login</button>
              </div>
            </div>
            
        
            <div class="user_options-forms" id="user_options-forms">
              <div class="user_forms-login">
                <h2 class="forms_title">Login</h2>
                <form class="forms_form" onSubmit={this.onSignin}>
                  <fieldset class="forms_fieldset">
                    <div class="forms_field">
                      <input name="email_si" id="email_si" onChange={this.onChange} type="email" placeholder="Email" class="forms_field-input" required autofocus />
                    </div>
                    <div class="forms_field">
                      <input name="password_si" id="password_si" onChange={this.onChange} type="password" placeholder="Password" class="forms_field-input" required />
                    </div>
                  </fieldset>
                  <div class="forms_buttons submit">
            
                    <input type="submit" value="Log In" class="forms_buttons-action"/>
                  </div>
                </form>
              </div>
              <div class="user_forms-signup">
                <h2 class="forms_title">Sign Up</h2>
                <form class="forms_form" onSubmit={this.onSubmit}>
                  <fieldset class="forms_fieldset">
                    <div class="forms_field">
                      <input type="text" name="name"  onChange={this.onChange} placeholder="Full Name" class="forms_field-input" required />
                    </div>
                    <div class="forms_field">
                      <input type="email" name="email"  onChange={this.onChange} placeholder="Email" class="forms_field-input" required />
                    </div>
                    <div class="forms_field">
                      <input type="password" name="password"  onChange={this.onChange} placeholder="Password" class="forms_field-input" required />
                    </div>
                  </fieldset>
                  <div class="forms_buttons submit">
                    <input type="submit" value="Sign up" class="forms_buttons-action"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>


    {/*}
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

    */}
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

 
  return{
    signIn:(creds)=>dispatch(signIn(creds)),
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpFormBase);

