import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteData, ShowData } from '../Redux/UserDetailsReducer/action'

const UserData = () => {
  const dispatch=useDispatch()
  const Store=useSelector((s)=>s.UserReducer) 
  useEffect(()=>{
    ShowData(dispatch)
  },[dispatch])
 
  const handalDelete=(id)=>{
   DeleteData(dispatch)(id)
  }
  return (
    <div>
      <h2 className='my-4'>User Details</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Store.Userdata && Store.Userdata.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.username}</td>
              <td>{el.Email}</td>
              <td>{el.Password}</td>
              <td>
                <button onClick={()=>handalDelete(el.id)}>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserData