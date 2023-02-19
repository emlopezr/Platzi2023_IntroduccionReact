import React from 'react'
import '../css/ToDoList.css'

const ToDoList = (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export default ToDoList