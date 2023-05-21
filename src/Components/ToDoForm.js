import React, {useState} from 'react'

const ToDoForm = (props) => {
  const {currentToDos, setCurrentToDos} = props;
  const [toDo, setToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {
      name: toDo,
      completed: false,
    }
    setCurrentToDos([...currentToDos, newToDo]);
    setToDo("");
  };
  
  
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <h2>Enter your To Do!</h2>
        <label>To Do:</label>
        <textarea
          type="text-area"
          placeholder='What do we need to get done?'
          rows = '5'
          cols = '50'
          onChange = {(e) => setToDo(e.target.value)}
          value = {toDo}
        ></textarea>
        <input type="submit" value="Save To Do"/>
      </form>
    </div>
    );
};
    

export default ToDoForm