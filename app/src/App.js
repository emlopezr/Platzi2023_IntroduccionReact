import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ToDoCounter from "./components/ToDoCounter";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import CreateToDoButton from "./components/CreateToDoButton";

const App = () => {
    // Custom hook localStorage
    const {item: toDos, saveItem: saveToDos, loading, error} = useLocalStorage("ToDos", []);

    // useStates
    const [searchValue, setSearchValue] = useState("");

    // Funcionalidad de contar ToDos
    const totalToDos = toDos.length;
    const completedToDos = toDos.filter((todo) => todo.completed).length;

    // Funcionalidad de búsqueda
    let filteredToDos = [];

    if (searchValue.length > 0) {
        filteredToDos = toDos.filter((toDo) =>
            toDo.text.toLowerCase().includes(searchValue.toLowerCase())
        );
    } else {
        filteredToDos = toDos;
    }

    // Funcionalidad de completar ToDos
    const completeToDo = (text) => {
        const newToDos = toDos.map((toDo) => {
            if (toDo.text === text) {
                return { ...toDo, completed: !toDo.completed };
            } else {
                return toDo;
            }
        });

        saveToDos(newToDos);
    };

    // Funcionalidad de borrar ToDos
    const deleteToDo = (text) => {
        const newToDos = toDos.filter((toDo) => toDo.text !== text);
        saveToDos(newToDos);
    };

    useEffect(() => {
        console.log("UseEffect")
    }, [totalToDos]);

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
                {error && <p>Error!</p>}
                {loading && <p>Cargando...</p>}

                {filteredToDos.map((todo) => (
                    <ToDoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeToDo(todo.text)}
                        onDelete={() => deleteToDo(todo.text)}
                    />
                ))}
            </ToDoList>

            <CreateToDoButton />
        </>
    );
};

export default App;
