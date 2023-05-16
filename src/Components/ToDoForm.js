import React, {useState} from 'react'

const ToDoForm = (props) => {

  const handleSubmit = (e) => {
    e.prevent.default();
  };
  
  return (
    <div>
    <h2>Enter your To Do!</h2>
    <label>To Do:</label>
    <input
      type="text-area"
      placeholder='What do we need to get done?'
    ></input>
    </div>
    )
}
    

export default ToDoForm