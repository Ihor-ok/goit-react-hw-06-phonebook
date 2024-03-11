import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Phonebook from 'components/Phonebook/Phonebook'
import Contacts from 'components/Contacts/Contacts'
import Filter from './Filter/Filter'
import css from './App.module.css'

const LS_KEY = 'contacts'

function App() {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY)) 
    
    if (contacts) {
      setContacts(contacts)
    
    }
  }, [])
  
  useEffect(() => {

    if (contacts.length === 0) {
      localStorage.removeItem(LS_KEY)
   
    }

    if (contacts.length > 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts))
    }

  })
  

  const handleSubmit = (values, { resetForm }) => {
    
    const contact = { ...values }
    contact.id = nanoid()
       

    if (contacts.find(contactState => contactState.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())) {
      alert(`${contact.name} is already in contacts.`)
      return
    }

    setContacts([...contacts, contact])

    resetForm();

  }

  const hendleDelete = (id) => {
    
    setContacts(contacts.filter((contac) => contac.id !== id))
   
  }

  const changeFilter = (evt) => {
    setFilter(evt.currentTarget.value)
  }


 

  const normslizedFilter = filter.toLocaleLowerCase()
  const visibileContakt = contacts.filter(contact => contact.name.toLowerCase().includes(normslizedFilter))

  
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Phonebook handleSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts contacts={visibileContakt} hendleDelete={hendleDelete} />
        
      </div>

    )
  

}



export default App

