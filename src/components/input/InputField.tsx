import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      className="input"
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        className="input__box"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
