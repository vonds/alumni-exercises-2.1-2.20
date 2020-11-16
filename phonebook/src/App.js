import React, { useState } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter , setFilter ] = useState( persons )
  const [ showAll, setShowAll] = useState(true)

  const handleNameInput = e =>  setNewName(e.target.value)
  const handleNumberInput = e => setNewNumber(e.target.value)
  const handleFilterInput = e => setFilter(e.target.value)
  const handlePerson = e => {
    e.preventDefault()
    if(persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewNumber('')
      setNewName('')
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(person => [...person, newPerson])
      setNewName('')
      setNewNumber('')
    } 
  }

  const filterNames = () => setShowAll(!showAll)
  

  const namesToShow = showAll ? 
    persons : 
    persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        onChange={handleFilterInput}
        type="text"
        onClick={filterNames}
        showAll={showAll}
      />
      <h3>Add Numbers</h3>
      <Form 
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
        handlePerson={handlePerson}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      {namesToShow.map(person => <Persons key={person.name} name={person.name} number={person.number}/>)}
    </div>
  );
}

export default App;
