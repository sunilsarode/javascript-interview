import React, { useState } from 'react';

import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TotoList from './components/TotoList';

const  App: React.FC =()=>{
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);

  function handleTodo(e:React.FormEvent){
    e.preventDefault();
    if(todo){
      setTodos([...todos,{
        id:Date.now(),
        todo:todo,
        isDone:false
      }])
      setTodo("")
    }
    
  }

  console.log(todos);
   
  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputField todo={todo} setTodo={setTodo} hadleAdd={handleTodo} />
     <TotoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
