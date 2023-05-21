import React, {useState} from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm';
import DisplayToDo from './Components/DisplayToDo';

function App() {
  const [currentToDos, setCurrentToDos] = useState([]);

  return (
    <div>
      <ToDoForm currentToDos={currentToDos} setCurrentToDos={setCurrentToDos}/>
      <DisplayToDo currentToDos={currentToDos} setCurrentToDos={setCurrentToDos}/>
    </div>
  );
}

export default App;
