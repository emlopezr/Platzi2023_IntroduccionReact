import React from 'react'
import '../css/CreateToDoButton.css'

const CreateToDoButton = () => {
    return (
        <button
            className="CreateToDoButton"
            onClick={() => console.log('Clicked')}
        >
            +
        </button>
    )
}

export default CreateToDoButton