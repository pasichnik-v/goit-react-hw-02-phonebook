import React from 'react';
import './ContactsList.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className="contact__item" key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)} className="button">
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
