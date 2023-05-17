import React, {useState} from 'react';
import ToDoForm from './Components/ToDoForm';
import DisplayToDo from './Components/DisplayToDo';

function App() {
  const [currentToDos, setCurrentToDos] = useState([]);

  const makeToDo = (newToDo) => {
    setCurrentToDos([...currentToDos, newToDo]);
  }
  return (
    <div>
      <ToDoForm onNewToDo={makeToDo}/>
      <DisplayToDo toDo={currentToDos}/>
    </div>
  );
}

export default App;
