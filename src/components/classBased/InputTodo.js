import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.title.trim()){
      this.props.addTodoItemProps(this.state.title);
      this.setState({
        title: ''
      })
    } else {
      alert('You should write an item');
    }


  };

  render(){
    return(
      <form onSubmit = {this.handleSubmit} className='form-container'>
        <input 
          type="text"
          className='input-text'
          placeholder='Add todo...'
          name= 'title' 
          value={this.state.title}
          onChange = {this.onChange}
          />
        <button className='input-submit'>Submit</button>
      </form>
    );
  }
}

export default InputTodo;