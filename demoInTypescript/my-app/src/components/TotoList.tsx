import React from 'react'
import './style.css'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TotoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
        {
          todos.map((todo=>{
            return <SingleTodo todo={todo} setTodos={setTodos} todos={todos} key={todo.id}/>
          }))
        }
    </div>
  )
}

export default TotoList
