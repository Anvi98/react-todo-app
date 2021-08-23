import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import InputTodo from './InputTodo.js';
import TodoList from './TodosList.js';
import { v4 as uuidv4 } from "uuid";


const TodoContainer = () => {

  const getInitialTodos = () => {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || []
  }

  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = id => {
      setTodos( prevState => 
        prevState.map(todo => {
          if(todo.id === id){
            return {
              ...todo,
              completed : !todo.completed,
          }
        }
        return todo
      }),
    )
  }

  const delTodo = id => {
    setTodos([
        ...todos.filter(todo => {
          return todo.id !== id;
        })
      ]);
  };

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          todo.title = updatedTitle;
        }
        return todo
      }),
    )
  };

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);
  
  return(
    <div className='container'>
      <div className="inner">
        <Header />
        <InputTodo  addTodoItemProps = {addTodoItem} />
        <TodoList 
          todos={todos} 
          handleChangeProps = {handleChange} 
          delTodoProps = {delTodo}
          setUpdate = {setUpdate}
        />
      </div>
    </div>
  );
}

export default TodoContainer;