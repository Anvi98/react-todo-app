import React from "react";
import TodoItem from './TodoItem.js';

const TodoList = props => {

    return(
      <ul>
        <h2>Todo List</h2>
        {props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            handleChangeProps = {props.handleChangeProps}
            delTodoProps = {props.delTodoProps}
            setUpdate={props.setUpdate}
            />
      ))}
    </ul>
    );
}

export default TodoList;