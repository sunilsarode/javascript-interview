import React, { useRef } from "react";
import "./style.css";

interface Prop {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  hadleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Prop> = ({ todo, setTodo, hadleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className="input" onSubmit={(e) => { hadleAdd(e); inputRef.current?.blur() }}>
        <input
          ref={inputRef}  
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          placeholder="enter a task"
          className="input__box"
        />
        <button type="submit" className="input_submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
