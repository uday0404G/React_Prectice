import React from 'react'

const Login = () => {
  return (
    <>
    <body>
  <div id="login-box">
    <div class="left-box">
      <h1> Sign Up </h1>
      <input type="text" name="username" placeholder="Username"/>
      <input type="text" name="email" placeholder="Email" required/>
      <input type="password" name="password" placeholder="Password" required/>
      <input type="password" name="password2" placeholder="Retype Password"/>
      <input type="submit" name="singup-button" placeholder="Sing Up"/>
    </div>
    <div class="right-box">
      <span class="signinwith">Sign in with<br/>Social Network </span>
      <button class="social facebook">Log in with Facebook</button>
      <button class="social twitter">Log in with Twitter</button>
      <button class="social google">Log in with Google+</button>
    
    </div>
    <div class="or">OR</div>
  </div> 
</body>
    </>

  )
}

export default Login

	
		
	