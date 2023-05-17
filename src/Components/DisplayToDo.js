import React from 'react'

const DisplayToDo = (props) => {
    
    const toDo = props;


    const completeToDo = (e) => {
        if (e.target.checked) {
        toDo.style.removeProperty('text-decoration');
        } else {
        toDo.setProperty('text-decoration', 'line-through');
        }
    };

    return (
        <div>
            {
                props.toDo.map((toDo, index) =>
                <div key={index}>
                    <form>
                    {toDo}
                    <input type="checkbox" name="completedToDo" onChange={(e) => completeToDo(e.target.value)}></input>
                    <input type="submit" name="deleteToDo"></input>
                    </form>
                </div>
                )
            }
        </div>
    )
}

export default DisplayToDo