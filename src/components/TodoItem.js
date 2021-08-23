import React from 'react';

class TodoItem extends React.Component {
  render(){
    return(
      <div>
        <li>
          <input 
          type="checkbox" 
          checked={this.props.todo.completed} 
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
          {this.props.todo.title}</li>
          <button onClick= {() => this.props.delTodoProps(this.props.todo.id)}
          >Delete
          </button>
      </div>
    );
  }
}

export default TodoItem;