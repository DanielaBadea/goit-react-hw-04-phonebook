import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function ContactForm ({ onAddContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newName = ev.target.elements.name.value;
    const newNumber = ev.target.elements.number.value;

    if (newName.trim() !== "" && newNumber.trim() !== "") {
      const newContact = {
        id: nanoid(),
        name: newName,
        number: newNumber
      };
      onAddContacts(newContact);
      
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.labelName}> Name:
        <input
          className={styles.formInput}
          type="text"
          name="name"
          placeholder='Name'
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          required
        />
      </label>
      <label className={styles.labelPhone}> Number:
        <input
          className={styles.formInput}
          type="tel"
          name="number"
          placeholder='Phone number'
          pattern="\+?\d{1,4}?[[\-.\s]]?\(?\d{1,3}?\)?[[\-.\s]]?\d{1,4}[[\-.\s]]?\d{1,4}[[\-.\s]]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={(ev) => setNumber(ev.target.value)}
          required
        />
      </label>
      <button type="submit" className={styles.btnSubmit}>Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContacts: PropTypes.func.isRequired,
};

export default ContactForm;
