import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = e => {
    console.log('enter')
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(inputText.title.trim()){
      props.addTodoItemProps(inputText.title);
      setInputText({
        title: ''
      })
    } else {
      alert('You should write an item');
    }
  };

  return(
    <form onSubmit = {handleSubmit} className='form-container'>
    <input 
      type="text"
      className='input-text'
      placeholder='Add todo...'
      name= 'title' 
      value={inputText.title}
      onChange = {onChange}
      />
    <button className='input-submit'>
      <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/>
    </button>
  </form>
  );
}

export default InputTodo;