import React from "react";
import Todo from "./Todo";
import './TodoList.css';

const TodoList = ({ todo, setTodo }) => {
    return(
      <div className="todo-container">
        <ul className="todo-list">
            {todo.map(el => (
                <Todo key={el.id} text={el.text} elem={el} todo={todo} setTodo={setTodo}/>
            ))}
        </ul>
      </div>
    );
}

export default TodoList;