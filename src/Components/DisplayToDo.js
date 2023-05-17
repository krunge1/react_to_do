import React from 'react'

const DisplayToDo = (props) => {
    return (
        <div>
            {
                props.toDo.map((toDo, index) =>
                <div key={index}>
                    <form>
                    {toDo}
                    <input type="checkbox"></input>
                    <input type="submit" value="Delete"></input>
                    </form>
                </div>
                )
            }
        </div>
    )
}

export default DisplayToDo