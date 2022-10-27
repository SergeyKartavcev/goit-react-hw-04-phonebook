import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useState } from 'react';


function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({name, number});
    Reset();
  
  };

  const Reset = () => {
    setName('');
    setNumber('');
  }

  const onChangeName = e => {
    setName(e.currentTarget.value);    
  };

  const onChangeTel = e => {
      setNumber(e.currentTarget.value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.contact_label}>
        Name:
        <input
          className={s.contact_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeName}
        />
      </label>
      <label className={s.contact_label}>
        Number
        <input
          className={s.contact_input}
          type="text"
          name="number"
          value={number}
          onChange={onChangeTel}
        />
      </label>
      <button className={s.contact_button} type="submit">
        add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
