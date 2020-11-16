import React from 'react'
import Input from './Input'

const Form = ({
    handlePerson,
    handleNameInput,
    handleNumberInput,
    newName,
    newNumber
}) => {

    return (
        <form onSubmit={handlePerson}>
            <Input 
                name="name"
                type="text"
                value={newName}
                onChange={handleNameInput}
            />
            
            <Input 
                name="number"
                type="text"
                value={newNumber}
                onChange={handleNumberInput}
            />   

            <div>
            <button 
                onClick={handlePerson}
                type="submit"
            >
                add
            </button>
            </div>
        </form>
    )
   
}

export default Form