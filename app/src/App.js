import React from "react";
import { ToDoProvider } from "./ToDoContext";

import AppUI from "./AppUI";

const App = () => {
    return (
        <ToDoProvider>
            <AppUI />
        </ToDoProvider>
    );
};

export default App;
