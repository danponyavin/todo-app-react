import React from "react";
import './Form.css';

const Form = ({ input, setInput, todo, setTodo, unique_id }) => {

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodo([...todo, {text: input, completed: false, id: unique_id}]);
        setInput("");
    }

    return(
      <form>
        <input type="text" value={input} onChange={ inputHandler } className="todo-input" placeholder="Enter a todo"/>
        <button className="todo-button" onClick={ submitTodoHandler } type="submit">
          Add!
        </button>
      </form>
    );
}


export default Form;