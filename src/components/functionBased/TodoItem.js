import React, { useState, useEffect } from 'react';
import styles from "./TodoItem.module.css";

const TodoItem = props => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () =>{
    console.log('Edit mode activated');
    setEditing(true)
  };

  const handleUpdateDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { id, completed, title } = props.todo;
  let viewMode = {}
  let editMode = {}

  if(editing){
    viewMode.display ='none';
  } else {
    editMode.display = 'none'
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  return(
    <div>
      <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}>
          <input 
          type="checkbox" 
          checked={completed} 
          className={styles.checkbox}
          onChange={() => props.handleChangeProps(id)}
          />
          <button onClick= {() => props.delTodoProps(id)}
          >Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input 
          type="text" 
          className={styles.textInput} 
          style={editMode}
          value = {title}
          onChange={e => {
            props.setUpdate(e.target.value, id)
          }}
          onKeyDown = {handleUpdateDone}
        />
      </li>
    </div>
  );
}

export default TodoItem;