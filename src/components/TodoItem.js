import React from 'react';
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  render(){
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { id, completed, title } = this.props.todo;
    return(
      <div>
        <li className={styles.item}>
          <input 
          type="checkbox" 
          checked={completed} 
          className={styles.checkbox}
          onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick= {() => this.props.delTodoProps(id)}
          >Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </li>
      </div>
    );
  }
}

export default TodoItem;