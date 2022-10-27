import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Container/Container';
// import shortid from 'shortid';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    } 
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const changeFilter = filteer => {
    setFilter(filter);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const visibleContacts = getVisibleContacts();
  console.log(visibleContacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}
      {contacts.length > 0 ? (
        <ContactList
          filter={filter}
          onChangeFilter={changeFilter}
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </Container>
  );
}

export default App;
