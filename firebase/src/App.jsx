import { useEffect, useState } from 'react'

import './App.css'
import { db } from './Firebase/firebase'
import { addDoc, collection,  getDocs } from 'firebase/firestore'

function App() {
  const [data,setData] = useState({
    name:"",
    email:""
  })
  const [arr,setArr]=useState([])
  const usersCollection=collection(db,'users')
  const handalChannge=(e)=>{
    let {name,value}=e.target
    setData({...data,[name]:value})
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    const docRef = await addDoc(usersCollection, data);
  }
  const fecth=async()=>{
    
    const data1= await getDocs(usersCollection)
    const getdata=data1.docs.map((el)=>({id:el.id, ...el.data()}))
    
  setArr(getdata)
  
  }
  console.log(arr);
  

  useEffect(()=>{
    fecth()
  },[])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your Email"  onChange={handalChannge}/>
        <input type="password" name="name" placeholder="Enter your password" onChange={handalChannge} />
        <input type="submit"/>
      </form> 

    </>
  )
}

export default App
