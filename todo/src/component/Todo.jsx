import { useState } from "react"


function Todo(){
    let [ name,setname]=useState("");
    let [arr,setarr]=useState([]);
    
    function store(){
      let  obj={
            name:name,
            cmp:false
        }
        setarr([...arr,obj])
    }
console.log(name);
console.log(arr);

    return(
<div>
        <input type="text" onChange={(el)=>{setname(el.target.value)}} />
        <button type="button" onClick={store}>Submit</button>
     {
           arr.map((el)=>{
            return (<div>
                  <h1>{el.name}</h1>
                 
            </div>)
        })
     }

</div>
    )
}
export default Todo