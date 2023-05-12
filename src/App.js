import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';

function App() {

  const unique_id = uuid();
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todo={todo} setTodo={setTodo} input={input} setInput={setInput} unique_id={unique_id}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;