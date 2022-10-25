import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Container/Container';
import shortid from 'shortid';
import { useState, useEffect} from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     setContacts({ contacts });
  //   }
  // }, [contacts]);


   useEffect(() => {
     window.localStorage.setItem("contacts", JSON.stringify(contacts));
   }, [contacts]); 

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    
    if (
      setContacts(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else if (setContacts(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else {
     
      setContacts([contact]);
 console.log(contact)
    }
    
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const changeFilter = e => {
    setFilter(filter);
  };

  const getVisibleContacts = () => {
    
  

    return setFilter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}
      {contacts.length > 0 ? (
        <ContactList
          contacts={getVisibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </Container>
  );
}

export default App;
