// import React from 'react'
// import {useState} from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import "./login.css"
// const Login = () => {
//    const [state, setstate] = useState({
//     email: '',
//     password: ''
//   }) 
//   const nav=useNavigate()
// const  handalChange=(e)=>{
//   let {name,value}=e.target;
//   setstate({...state,[name]:value})
//   }
//  const handalSubmit=(e)=>{
//   e.preventDefault()
// if(state.email)
// {
//   fetch(`http://localhost:3000/Users?email=${state.email}`)
//   .then((res)=>res.json())
//   .then((res)=>{
//     if(res.length>0){
//       if(res[0].password==state.password){
//         alert("login Successfull")
//         localStorage.setItem('isLogin',true)
//         nav('/')
//       }
//       else{
//         alert("password mismatch")
//       }
//     }else{
//       alert("invalid email or password")
//     }
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// }
// else{
//   alert("pLEASE FILL THE FORM")
// }


//   }
//   return (
//     <>
//     <div className='bb'>
//       <div className="main">
//       <div className="background">
//         <div className="shape"></div>
//         <div className="shape"></div>
//       </div>

//       <form onSubmit={handalSubmit}>
//         <h3>Login Here</h3>

//         <label for="username">Username</label>
//         <input type="email" name='email' onChange={handalChange} placeholder="Email or Phone" id="email" />

//         <label for="password">Password</label>
//         <input type="password" onChange={handalChange} placeholder="Password" id="password" name='password'/>
// <Link  to={'/signup'}>Signup</Link>
//         <button>Log In</button>
//         <div className="social">
//           <div className="go">
//             <i className="fab fa-google"></i> Google
//           </div>
//           <div className="fb">
//             <i className="fab fa-facebook"></i> Facebook
//           </div>
//         </div>
//       </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Login;
