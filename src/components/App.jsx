import React from "react";
import { useEffect, useState, useRef } from "react";
import { nanoid } from 'nanoid'

import { FormPhoneBook } from "./FormPhoneBook/FormPhoneBook";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import styled from 'styled-components';

const KEY_PHONE_BOOK = "phone_book";
const INIT_DATA = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const BoxApp = styled.div`
  padding: 20px;
`;

export function App() {
  const [contacts, setContacts] = useState(INIT_DATA);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);
  // const cntTmp = useRef(1);

  function initData(phoneBook) {
    setFilter('');
    setContacts([...JSON.parse(phoneBook)]);
  }
  
  useEffect(() => {
    const phoneBook = localStorage.getItem(KEY_PHONE_BOOK);
    // console.log('Reading: ', phoneBook);
    // console.log(cntTmp);
    // cntTmp.current += 1;
    if (phoneBook) initData(phoneBook);
  }, []);

  useEffect(() => { 
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(KEY_PHONE_BOOK, JSON.stringify(contacts));
  }, [contacts]);
  
  const handleSubmit = (value, {resetForm}) => {
    const { name, number } = value;
    const contact = {
        id: nanoid(),
        name,
        number,
    };

    if (isContact(name)) {
      alert(`${name} is alredy in contact.`);
      return;
    }
    setContacts([contact, ...contacts]);
    resetForm();
  }
  
  const isContact = (name) => {
    const normalizeName = name.toLowerCase();
    return contacts.find(contact => contact.name.toLowerCase() === normalizeName);
  }

  const onChangeFilter = (e) => {
    setFilter(e.currentTarget.value);
  }

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }

  const deleteContact = (index) => { 
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }

    return (
    <BoxApp>
      <h2>Phonebook</h2>
        <FormPhoneBook handleSubmit={handleSubmit} />
          <h2>Contacts</h2>
        <Filter value={filter} onChange={onChangeFilter}/>
        <ContactList listData={getVisibleContacts()} deleteContact={deleteContact} />
    </BoxApp>
    );
}
