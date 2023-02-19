import React from 'react'
import ToDoCounter from './components/ToDoCounter'
import ToDoSearch from './components/ToDoSearch'
import ToDoList from './components/ToDoList'
import ToDoItem from './components/ToDoItem'
import CreateToDoButton from './components/CreateToDoButton'


const App = () => {
    return (
        <>
            <ToDoCounter />

            <ToDoSearch />

            <ToDoList>
                <ToDoItem />
            </ToDoList>

            <CreateToDoButton />
        </>
    )
}

export default App