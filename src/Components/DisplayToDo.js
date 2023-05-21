import React, { useState } from 'react'
import '../App.css';
const DisplayToDo = (props) => {
    
    const {currentToDos, setCurrentToDos} = props;

    const completeToDo = (taskStatus) => {
            taskStatus.completed = !taskStatus.completed;
            setCurrentToDos ([...currentToDos])
            console.log(taskStatus);
        } 

    const handleDelete = (deletedToDo) => {
        setCurrentToDos (
            currentToDos.filter((item, index) => {
                return index != deletedToDo})
        )
    }
    
    return (
        <div>
            {
                currentToDos.map((toDo, index) => 
                <div>
                    {toDo.completed === true?
                    <span className="checked" id={index}>{toDo.name}</span>:
                    <span className="notChecked" id={index}>{toDo.name}</span>}
                    <input type="checkbox"  onClick={(e) => completeToDo(toDo)}></input>
                    <button type="submit" name="deleteToDo" onClick={(e) => handleDelete(index)}>Delete</button>
                </div>
                )
            }
        </div>
    )
}

export default DisplayToDo