

import React from 'react'
import { useState } from 'react'

function Login() {
    let [state,setState] = useState('login');
    let [username,setusername] = useState('');
    let [email,setemail] = useState('');
    let [password,setPas] = useState('');
    let [arr,setarr] = useState([])
    let [lemail,setlemail] = useState('');
    let [lpas,setlpas] = useState('');

    function reg(){
        let obj={
            name:username,
            email:email,
            pas:password
        }
        setarr([...arr,obj])
        setState("login")
    }
    function Loginq(){
       let data=arr.filter((el)=> el.email==lemail && el.pas==lpas);
        if(data.length>0)
            {
                alert("Ja badva");
            }
            else{
                alert("may ja")
            }
    }
    console.log(arr);
  return (
    <div>
        {
            state =="login"? <div>
                <form action="">
                    <fieldset>
                        <input type="text" placeholder='Email' onChange={(e)=>setlemail(e.target.value)} />
                        <input type="text" placeholder='Password' onChange={(e)=>setlpas(e.target.value)}/>
                        <button onClick={Loginq}>Submit</button>
                        <a href="#" onClick={()=>setState("Reg")}>Registration</a>
                    </fieldset>
                </form>
                 </div>:
                  <div>            
                        <form action="">
                    <fieldset>
                        <input type="text" placeholder='Username' onChange={(e)=>setusername(e.target.value)} />
                        <input type="text" placeholder='Email' onChange={(e)=>setemail(e.target.value)} />
                        <input type="text" placeholder='Password' onChange={(e)=>setPas(e.target.value)} />
                       <button onClick={reg}>REg</button>
                       
                       <a href="#" onClick={()=>setState("login")}>Login</a>

                    </fieldset>
                </form></div>
        }
    </div>
  )
}

export default Login