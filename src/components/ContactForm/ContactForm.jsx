import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useState } from 'react';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Вы не ввели все контактные данные');
      return;
    }

    if (Number.isNaN(+number)) {
      alert('Телефонный номер должен содержать только цифры');
      return;
    }

    onSubmit(name, number);
    setName('');
    setNumber('');
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
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
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={s.contact_label}>
        Number
        <input
          className={s.contact_input}
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button
        className={s.contact_button}
        type="submit"
        onSubmit={handleSubmit}
      >
        add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
