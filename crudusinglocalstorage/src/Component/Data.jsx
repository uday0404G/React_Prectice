import React from 'react'

const Data = ({arr,handalEdit,handalDelete}) => {
  return (
    <>
    {

    arr.map((el)=>{
        return(
            <>
            <div key={el.id}>
        <img src={el.Image} alt={arr.name}/>
        <h1>{el.name}</h1>
        <h1>{el.Price}</h1>
        <h1>{el.Quantity}</h1>
        <button type='button' onClick={()=>handalEdit(el.id)}>Edit</button>
        <button type='button' onClick={()=>handalDelete(el.id)}>Delete</button>
            </div>
            </>
        )
    })
    }
    </>
  )
}

export default Data