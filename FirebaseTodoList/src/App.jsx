import React from 'react'
import Todo from './Componenet/Todo'
import SignupPage from './Componenet/SignupPage'

const App = () => {
  const IsLogin=localStorage.getItem("isLogin")
  return (
    IsLogin?<Todo/>:<SignupPage/>
  )
}

export default App