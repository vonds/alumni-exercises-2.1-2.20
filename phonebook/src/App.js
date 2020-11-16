import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter , setFilter ] = useState( persons )
  const [ showAll, setShowAll] = useState(true)

  useEffect(() => {
    Axios.get('http://localhost:3001/persons')
      .then(res => setPersons(res.data))
  }, [])

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
