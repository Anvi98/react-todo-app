import React from "react";
import TodoItem from './TodoItem.js';

class TodoList extends React.Component {
  render(){
    return(
      <ul>
        <h2>Todo List</h2>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            handleChangeProps = {this.props.handleChangeProps}
            delTodoProps = {this.props.delTodoProps}
            setUpdate={this.props.setUpdate}
            />
      ))}
    </ul>
    );
  }
}

export default TodoList;