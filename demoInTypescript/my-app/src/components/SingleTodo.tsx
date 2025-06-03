import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef=useRef<HTMLInputElement>(null)

  function handleDone(id: number): void {
    setTodos(
      todos.map((todol) => {
        return todol.id === id ? { ...todol, isDone: !todo.isDone } : todol;
      })
    );
  }

  function handleDelete(id: number): void {
    setTodos(todos.filter((todol) => todol.id !== id));
  }

  function handleEditTodo(): void {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  }

  function handleEdit(e: React.FormEvent<HTMLFormElement>, id: number): void {
    e.preventDefault();
    setTodos(
      todos.map((todol) =>
        todol.id === id ? { ...todo, todo: editTodo } : todol
      )
    );
    setEdit(false)
  }

  useEffect(()=>{
    inputRef.current?.focus()
  },[edit])

  return (
    <div>
      <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
          />
        ) : todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}

        <div>
          <span className="icon" onClick={() => handleEditTodo()}>
            <AiFillEdit />
          </span>
          <span className="icon">
            <AiFillDelete onClick={() => handleDelete(todo.id)} />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
