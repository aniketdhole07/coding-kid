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