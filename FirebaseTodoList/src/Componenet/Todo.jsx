import React, { useState, useEffect } from 'react';
import './Todo.css';
import { db } from '../Firebase/db';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';


const Todo = () => {
    const [toDoInput, setToDoInput] = useState('');
    const [toDos, setToDos] = useState([]);
    const [todo1,setTodo] =useState(false)
    const [savedTheme, setSavedTheme] = useState('standard');
    const userCollecton=collection(db,'Todo')
    useEffect(() => {
        const localTheme = localStorage.getItem('savedTheme') || 'standard';
        setSavedTheme(localTheme);
        changeTheme(localTheme);
    }, []);

    const addToDo=async(e)=>{
      e.preventDefault()
        await addDoc(userCollecton,{toDoInput,Completed:false})
        Read()
    }
    const Read=async()=>{
      const data=await getDocs(userCollecton)
      const arr=data.docs.map((el)=>{
        return {id:el.id,...el.data()}
      })
      setToDos(arr)
    }
    useEffect(()=>{
      Read()
    },[])
    const deleteToDo=async(id)=>{
       const dlt=doc(db,"Todo",id)
       await deleteDoc(dlt)
      Read()
    }
    const toggleComplete = async (id, currentStatus) => {
      const todoDoc = doc(db, 'Todo', id);
      await updateDoc(todoDoc, { Completed: !currentStatus });
      Read();
  };
   
    const changeTheme = (theme) => {
        setSavedTheme(theme);
        localStorage.setItem('savedTheme', theme);
        document.body.className = theme;
    };
const [da,setDa]=useState()
useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setDa(JSON.parse(storedUserInfo));
    }
  }, []);
    return (
        <div className="App">
          <div className='div'>
              <h1>Welcome, {da?.displayName}</h1>

              <img src={da?.photoURL} alt="" width="50px" height="50px"/>
              
          </div>
          {/* <button onClick={()=>localStorage.setItem("isLogin","")}>Logout</button> */}

            <div id="header">
                <div className="flexrow-container">
                    <div className="standard-theme theme-selector" onClick={() => changeTheme('standard')}></div>
                    <div className="light-theme theme-selector" onClick={() => changeTheme('light')}></div>
                    <div className="darker-theme theme-selector" onClick={() => changeTheme('darker')}></div>
                </div>
                <h1 id="title" className={savedTheme === 'darker' ? 'darker-title' : ''}>Just do it.<div id="border"></div></h1>
            </div>
            <div id="form">
                <form onSubmit={addToDo}>
                    <input
                        className={`${savedTheme}-input todo-input`}
                        type="text"
                        placeholder="Add a task."
                        value={toDoInput}
                        onChange={(e) => setToDoInput(e.target.value)}
                    />
                    <button className={`${savedTheme}-button todo-btn`} type="submit">
                        I Got This!
                    </button>
                </form>
            </div>

            <ul className="todo-list">
                {toDos.map((todo) => (
                    <div key={todo.id} className={`todo ${savedTheme}-todo ${todo.Completed ? 'completed' : ''}`}>
                        <li className="todo-item">{todo.toDoInput}</li>
                        <button
                            className={`check-btn ${savedTheme}-button`}
                            onClick={() => toggleComplete(todo.id,todo.Completed)}
                        >
                            <i className="fas fa-check"></i>
                        </button>
                        <button
                            className={`delete-btn ${savedTheme}-button`}
                            onClick={() => deleteToDo(todo.id)}
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                ))}
            </ul>
           
        </div>
    );
};

export default Todo;
