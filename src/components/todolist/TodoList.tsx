import React from "react";
import { Todo } from "../../global/module";
import TodoCard from "../todo/TodoCard";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos__list">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
