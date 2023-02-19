import React, { useState } from 'react'
import ToDoCounter from './components/ToDoCounter'
import ToDoSearch from './components/ToDoSearch'
import ToDoList from './components/ToDoList'
import ToDoItem from './components/ToDoItem'
import CreateToDoButton from './components/CreateToDoButton'

const defaultToDos = [
    { text: 'Tomar el curso de HTML', completed: true },
    { text: 'Tomar el curso de CSS', completed: true },
    { text: 'Tomar el curso de JavaScript', completed: true },
    { text: 'Tomar el curso de ReactJS 1', completed: false },
    { text: 'Tomar el curso de ReactJS 2', completed: false },
];

const App = () => {
    const [toDos, setToDos] = useState(defaultToDos)
    const [searchValue, setSearchValue] = useState('')

    const totalToDos = toDos.length
    const completedToDos = toDos.filter(todo => todo.completed).length

    // Funcionalidad de búsqueda
    let filteredToDos = []

    if (searchValue.length > 0) {
        filteredToDos = toDos.filter(todo =>
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
        )
    } else {
        filteredToDos = toDos
    }

    return (
        <>
            <ToDoCounter
                totalToDos={totalToDos}
                completedToDos={completedToDos}
            />

            <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <ToDoList>
                {filteredToDos.map(todo =>
                    <ToDoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                )}
            </ToDoList>

            <CreateToDoButton />
        </>
    )
}

export default App