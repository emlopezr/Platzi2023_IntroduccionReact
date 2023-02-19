import React from 'react'
import '../css/ToDoCounter.css'

const ToDoCounter = ({totalToDos, completedToDos}) => {
    return (
        <h2 className="ToDoCounter">
            Has completado {completedToDos} de {totalToDos} To-Dos
        </h2>
    )
}

export default ToDoCounter