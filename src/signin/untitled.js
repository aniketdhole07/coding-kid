import React from 'react'
import "./Signin.css"

import $ from 'jquery';

const INITIAL_STATE_SIGNUP = {
  name_sp: '',
  email_sp: '',
  password_sp: '',
  error_sp: null,
};

function Signin() {

			
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
	
		
		return(
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
							<form id="login" tabindex="500">
								<h3>Login</h3>
								<div class="mail">
									<input type="mail" name=""/>
									<label>Mail or Username</label>
								</div>
								<div class="passwd">
									<input type="password" name=""/>
									<label>Password</label>
								</div>
								<div class="submit">
									<button class="dark">Login</button>
								</div>
							</form>
							<form id="register" tabindex="502">
								<h3>Register</h3>
								<div class="name">
									<input type="text" name="" value={name_sp}/>
									<label>Full Name</label>
								</div>
								<div class="mail">
									<input type="mail" name="" value={email_sp}/>
									<label>Mail</label>
								</div>
								<div class="passwd">
									<input type="password" name="" value={password_sp}/>
									<label>Password</label>
								</div>
								<div class="submit">
									<button class="dark">Register</button>
								</div>
								{error_sp && <p>{error_sp.message}</p>}
							</form>
						</div>
					</div>	
				</div>


		</div>
			)
		
	
}

export default Signin





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
							<form id="login" tabindex="500">
								<h3>Login</h3>
								<div class="mail">
									<input type="mail" name=""/>
									<label>Mail or Username</label>
								</div>
								<div class="passwd">
									<input type="password" name=""/>
									<label>Password</label>
								</div>
								<div class="submit">
									<button class="dark">Login</button>
								</div>
							</form>
							<form id="register" tabindex="502" onSubmit={this.onSubmit}>
								<h3>Register</h3>
								<div class="name_sp">
									<input type="text" name="Name" value={name_sp} onChange={this.onChange}/>
									<label>Full Name</label>
								</div>
								<div class="email">
									<input type="text" name="Email" value={email_sp} onChange={this.onChange}/>
									<label>Mail</label>
								</div>
								<div class="password">
									<input type="password" name="Password" value={password_sp} onChange={this.onChange}/>
									<label>Password</label>
								</div>
								<div class="submit">
									<button class="dark">Register</button>
								</div>
								{error_sp && <p>{error_sp.message}</p>}
							</form>
						</div>
					</div>	
				</div>


		</div>


		import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Signin.scss'
import { withFirebase } from '../firebase';

import $ from 'jquery';
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  name_sp: '',
  email_sp: '',
  password_sp: '',
  error_sp: null,
};
function toggle(e) {
	  e.preventDefault();
	  document.querySelector('.form').classList.toggle('slide');
    }
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit(){
    const { name_sp, email_sp, password_sp } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email_sp, password_sp)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });

    
  };

 

  render() {
    const {
      name_sp,
      email_sp,
      password_sp,
      error_sp,
    } = this.state;

    const isInvalid =
      password_sp === '' ||
      email_sp === '' ||
      name_sp === '';

    document.querySelectorAll('.toggle-slide').forEach(e => e.addEventListener('click', toggle));

	
	

    return (
   
    
		  <div class="form__wrapper">
		  <div class="form">
		    
		    <div class="form__options">
		      <div class="form__options__login">
		        <div class="options__body">
		          <p>Already have an account?</p>
		          <a href="#" class="btn btn-light toggle-slide">Login!</a>
		        </div>
		      </div>
		      <div class="form__options__signup">
		        <p>Don't have an account yet?</p>
		          <a href="#" class="btn btn-light toggle-slide">Sign Up!</a>
		        <small>It's free!</small>
		      </div>
		    </div>
		    
		    <div class="form__background"></div>
		    
		    <div class="form__body">
		      <form class="login">
		        <h2>Login!</h2>
		        <div class="input-field">
		          <input type="text" id="log_username" name="log_username"/>
		          <label for="log_username">Username</label>
		        </div>
		        <div class="input-field">
		          <input type="password" id="log_password" name="log_password"/>
		          <label for="log_password">Password</label>
		        </div>
		        <input type="submit" class="btn" value="Login" name="login"/>
		</form>
		      <form class="sign-up" onSubmit={this.onSubmit}>
		          <h2>Sign Up!</h2>
		          <div class="input-field">
		            <input type="email" id="create_email" name="create_email" defaultValue={email_sp} />
		            <label for="create_email">Email Address</label>
		          </div>
		          <div class="input-field">
		            <input type="text" id="create_username" name="create_username" defaultValue={name_sp} />
		            <label for="create_username">Username</label>
		          </div>
		          <div class="input-field">
		            <input type="password" id="create_password" name="create_password" defaultValue={password_sp} />
		            <label for="create_password">Password</label>
		          </div>

		          <input type="submit" class="btn" value="Create Account" name="signup" onClick={this.onSubmit}/>
		        </form>
		    </div>
		    
		  </div>
		</div>


		
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };




//here


import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../firebase';
import "./Signin.css";
import $ from 'jquery';
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  error: null,
  email_si: '',
  password_si: '',
  error_si: null, 
};


class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { name, email, password} = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };
  
  onSignin = event => {
    const { email_si, password_si } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email_si, password_si)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  

  render() {
    const {
      name,
      email,
      password,
      error,
      email_si,
      password_si,
      error_si
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '' ||
      name === '';

    const isInvalid_si = password_si === '' || email_si === '';

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
                  <input name="email_si" value={email_si} onChange={this.onChange} type="text" />
                  <label>Mail or Username</label>
                </div>
                <div class="passwd">
                  <input name="password_si" value={password_si} onChange={this.onChange} type="password" />
                  <label>Password</label>
                </div>
                <div class="submit">
                  <button disabled={isInvalid_si} class="dark">Login</button>
                </div>
                {error_si && <p>{error_si.message}</p>}
              </form>

              <form id="register" tabindex="502" onSubmit={this.onSubmit}>
                <h3>Register</h3>
                <div class="name">
                  <input type="text" name="name" value={name} onChange={this.onChange} />
                  <label>Full Name</label>
                </div>
                <div class="email">
                  <input type="text" name="email" value={email} onChange={this.onChange}/>
                  <label>Mail</label>
                </div>
                <div class="password">
                  <input type="password" name="password" value={password} onChange={this.onChange}/>
                  <label>Password</label>
                </div>
                <div class="submit">
                  <button disabled={isInvalid} class="dark">Register</button>
                </div>
                {error && <p>{error.message}</p>}
                
              </form>
          </div>
          </div>  
        </div>

    
    </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={"/signin"}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };









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

.user_forms-login
      .forms_buttons-action
        margin-top: 30px
        
    .user_forms-signup,
    .user_forms-login
      top: 40px
      width: calc(50% + 30px)










      @media only screen and (max-width: 600px){
$color-body: #1abc9c;
$color-accent: #16a085;
$color-input: #fff;


//    fix position radio input off-canvas
input[type="radio"] {
    position: fixed;
    left: -100px;
}

//    style input fields (note hidden by default) 
input:not([type="radio"]) {
    appearance: none;
    background-color: $color-input;
    display: block;
    transition: 300ms ease;
    border-radius: 7px;
    border: 0;
    max-height: 0;
    margin: 0;
    padding: 0 10px;
    overflow: hidden;
    width: 250px;
    opacity: 0;
    font-size: 16px;
    text-align: center;
    outline: 0;
}

//    show input based on radio selection 
[id="sign-in"]:checked ~ input.sign-in,
[id="sign-up"]:checked ~ input.sign-up,
[id="reset"]:checked ~ input.reset {
    max-height: 40px;
    padding: 10px;
    margin: 10px 0;
    opacity: 1;
}


//    submit button 
si.button {
    width: 250px;
    height: 40px;
    border-radius: 7px;    
    background-color: $color-accent;
    font-size: 0;
    &:before { font-size: 16px; }
}

//    show botton text based on radio selection
[id="sign-in"]:checked ~ si.button:before { content: 'Sign In'; }
[id="sign-up"]:checked ~ sg.button:before { content: 'Sign Up'; }


//            
label {
    position: relative;
    display: inline-block;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    color: $color-accent;
    transition: 300ms ease;
    width: calc(100% / 3 - 4px);
    
    //    pointer arrow
    &:after {
        content: '';
        border: 10px solid transparent;
        position: absolute;
        bottom: -10px;
        left: calc(50% - 10px);
        transition: inherit;
    }
}

//     set active label marker
[id="sign-in"]:checked ~ [for="sign-in"],
[id="sign-up"]:checked ~ [for="sign-up"] {
    color: $color-input;
    &:after {
        border-bottom-color: $color-input;
    }
}


//    flex does not work well on fiedset 
//    why we use a styling wrapper
.flex-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 300px;
    text-align: center;
}
.user {
display: none;
}
body {
    background-color: $color-body;
    font-size: 16px;
}
}


$breakpoint-tablet: 600px;
@media screen and (min-width: $breakpoint-tablet)
  $bdrds: 3px

  $white: #fff
  $black: #000
  $gray: #ccc
  $salmon: #e8716d
  $smoky-black: rgba(#222222, .85)

  $ff: 'Montserrat', sans-serif
  $ff-body: 12px
  $ff-light: 300
  $ff-regular: 400
  $ff-medium: 500


  /**
   * General configs
   */
 
    
  button
    background-color: transparent
    padding: 0
    border: 0
    outline: 0
    cursor: pointer
    
  input
    background-color: transparent
    padding: 0
    border: 0
    outline: 0
    
    &[type="submit"]
      cursor: pointer
      
    &::placeholder
      font-size: .85rem
      font-family: $ff
      font-weight: $ff-light
      letter-spacing: .1rem
      color: $gray

      
  /**
   * Bounce to the left side
   */
  @keyframes bounceLeft
    0%
        transform: translate3d(100%, -50%, 0)

    50%
        transform: translate3d(-30px, -50%, 0)

    100%
        transform: translate3d(0, -50%, 0)

  /**
   * Bounce to the left side
   */
  @keyframes bounceRight
    0%
      transform: translate3d(0, -50%, 0)

    50%
      transform: translate3d(calc(100% + 30px), -50%, 0)

    100%
      transform: translate3d(100%, -50%, 0)

  /**
   * Show Sign Up form
   */
  @keyframes showSignUp
    100%
      opacity: 1
      visibility: visible
      transform: translate3d(0, 0, 0)
    

  /**
   * Page background
   */
  .veen
    display: none
  .user
    display: flex
    justify-content: center
    align-items: center

    width: 180%
    height: 100vh
    background: #ccc
    background-size: cover

    &_options-container
      position: relative
      width: 120%

    &_options-text
      display: flex
      justify-content: space-between
      width: 100%
      background-color: $smoky-black
      border-radius: $bdrds


  /**
   * Registered and Unregistered user box and text
   */
  .user_options-registered,
  .user_options-unregistered
    width: 50%
    padding: 75px 45px

    color: $white
    font-weight: $ff-light

  .user_registered-title,
  .user_unregistered-title
    margin-bottom: 15px
    font-size: 1.66rem
    line-height: 1em

  .user_unregistered-text,
  .user_registered-text
    font-size: .83rem
    line-height: 1.4em

  .user_registered-login,
  .user_unregistered-signup
    margin-top: 30px
    border: 1px solid $gray
    border-radius: $bdrds
    padding: 10px 30px

    color: $white
    text-transform: uppercase
    line-height: 1em
    letter-spacing: .2rem

    transition: background-color .2s ease-in-out, color .2s ease-in-out

    &:hover
      color: $smoky-black
      background-color: $gray


  /**
   * Login and signup forms
   */
  .user_options-forms
    position: absolute
    top: 50%
    left: 30px

    width: calc(50% - 30px)
    min-height: 500px
    background-color: $white
    border-radius: $bdrds
    box-shadow: 2px 0 15px rgba($black, .25)
    overflow: hidden

    transform: translate3d(100%, -50%, 0)
    transition: transform .4s ease-in-out

    .user_forms-login
      transition: opacity .4s ease-in-out, visibility .4s ease-in-out

    .forms
      &_title
        margin-bottom: 45px

        font-size: 1.5rem
        font-weight: $ff-medium
        line-height: 1em
        text-transform: uppercase
        color: $salmon
        letter-spacing: .1rem

      &_field
        &:not(:last-of-type)
          margin-bottom: 20px

      &_field-input
        width: 100%
        border-bottom: 1px solid $gray
        padding: 6px 20px 6px 6px

        font-family: $ff
        font-size: 1rem
        font-weight: $ff-light
        color: darken($gray, 30%)
        letter-spacing: .1rem

        transition: border-color .2s ease-in-out

        &:focus
          border-color: darken($gray, 30%)

      &_buttons
        display: flex
        justify-content: space-between
        align-items: center

        margin-top: 35px

        &-forgot
          font-family: $ff
          letter-spacing: .1rem
          color: $gray
          text-decoration: underline

          transition: color .2s ease-in-out

          &:hover
            color: darken($gray, 10%)

        &-action
          background-color: $salmon
          border-radius: $bdrds
          padding: 10px 35px

          font-size: 1rem
          font-family: $ff
          font-weight: $ff-light
          color: $white
          text-transform: uppercase
          letter-spacing: .1rem

          transition: background-color .2s ease-in-out

          &:hover
            background-color: darken($salmon, 10%)

    .user_forms-signup,
    .user_forms-login
      position: absolute
      top: 70px
      left: 40px

      width: calc(100% - 80px)

      opacity: 0
      visibility: hidden
      transition: opacity .4s ease-in-out, visibility .4s ease-in-out, transform .5s ease-in-out

    .user_forms-signup
      transform: translate3d(120px, 0, 0)

      .forms_buttons
        justify-content: flex-end

    .user_forms-login
      transform: translate3d(0, 0, 0)
      opacity: 1
      visibility: visible


  /**
   * Triggers
   */
  .user_options-forms
    &.bounceLeft
      animation: bounceLeft 1s forwards

      .user_forms-signup
        animation: showSignUp 1s forwards

      .user_forms-login
        opacity: 0
        visibility: hidden
        transform: translate3d(-120px, 0, 0)

    &.bounceRight
      animation: bounceRight 1s forwards
      

  