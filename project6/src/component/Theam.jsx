import React, { useEffect, useState } from 'react'

const Theam = () => {
    let [Theam,setTheam] = useState(sessionStorage.getItem("Theam")||"");
    let [lang,setLang] = useState(localStorage.getItem("lang")||"");

    const HandallangChange=(e)=>{
        setLang(e.target.value)
    }
    
    
    const HandalChange = (e) =>{
      setTheam(e.target.value)
    }
    
    useEffect(()=>{
      localStorage.setItem("lang",lang)
     

    },[lang])
    useEffect(()=>{
      sessionStorage.setItem("Theam",Theam)
      document.body.style.backgroundColor =  Theam === 'Light' ? 'white' :Theam === 'Dark' ? 'black': 'white';

      document.body.style.color = Theam === 'Dark' ? 'white' : Theam === 'Light' ? 'black' : 'black';


    },[Theam])
  return (
    <>
    
    <select onChange={HandallangChange}>
      <option value="">Select Lengauge</option>

        <option value="English" >English</option>
        <option value="Hindi">Hindi</option>
        <option value="Bhojpuri">Bhojpuri</option>
    </select>
    
    <select onChange={HandalChange}>
         <option value="">Select Them</option>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
    </select>
  {
    lang === "Bhojpuri" ? <h1>Bhojpuri</h1> : lang === "Hindi" ? <h1>Hindi</h1> : <h1>English</h1>

  }

    </>
  )
}

export default Theam