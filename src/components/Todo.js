import React from "react";
import './Todo.css';

const Todo = ({ text, elem, todo, setTodo }) => {

    const deleteTodoHandler = () => {
        setTodo(todo.filter((el) => el.id !== elem.id));
    };

    const doneTodoHandler = () => {
        setTodo(todo.map((el) => {
            if (el.id === elem.id){
                return { 
                    ...el, 
                    completed: !el.completed
                };
            }
            return el;
        }));
    };

    return(
      <div className="todo">
        <li className={`todo-item ${elem.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={doneTodoHandler} className="todo-completed-btn">Complete</button>
        <button onClick={deleteTodoHandler} className="todo-delete-btn">Delete</button>
      </div>
    );
}

export default Todo;