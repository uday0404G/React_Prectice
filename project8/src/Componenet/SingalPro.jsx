import React from 'react'
import { useParams } from 'react-router-dom'

const SingalPro = () => {
  const id=useParams()
  console.log(id);
  return (
    <div>SingalPro</div>
  )
}

export default SingalPro