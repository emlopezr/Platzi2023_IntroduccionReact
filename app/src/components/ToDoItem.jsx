import React from 'react'
import '../css/ToDoItem.css'

const ToDoItem = (props) => {

    const onComplete = () => {
        alert('ToDoItem completed: ' + props.text)
    }

    const onDelete = () => {
        alert('ToDoItem deleted: ' + props.text)
    }

    return (
        <li className="ToDoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                <i className="fa-sharp fa-solid fa-circle-check"></i>
            </span>

            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--completed'}`}>
                {props.text}
            </p>

            <span
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            </span>

        </li>
    )
}

export default ToDoItem