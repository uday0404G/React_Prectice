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
    
    <div className="container">
      <div className='sub-lcontainer'>

            <select onChange={HandallangChange} value={lang}>
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Bhojpuri">Bhojpuri</option>
            </select>

            <select onChange={HandalChange} value={Theam}>
                <option value="">Select Theme</option>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
            </select>
      </div>
      <div className='lang'>
        

  {
    lang === "Bhojpuri" ? <iframe width="800" height="500" src="https://www.youtube.com/embed/_6chSkawSXw?si=Z-GOge0jAzflS4FU" title="YouTube video player" ></iframe>:
     lang === "Hindi" ? 
     <iframe width="800" height="500" src="https://www.youtube.com/embed/Nnop2walGmM?si=Z74eQjufFGssYU1G"
      title="YouTube video player"  
      ></iframe>
     : <iframe width="800" height="500" src="https://www.youtube.com/embed/T3E9Wjbq44E?si=1CTMwbEqcCQz6PVI" title="YouTube video player" ></iframe>
    
  }
  </div>
  </div>
  
    </>
  )
}

export default Theam