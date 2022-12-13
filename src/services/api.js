import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const PATH_DATA_BASE = 'https://6398b193fe03352a94db7bbc.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/contacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${PATH_DATA_BASE}/contacts`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      if (
        !thunkAPI
          .getState()
          .contactsData.contacts.items.find(
            cont => cont.name.toLowerCase() === contact.name.toLowerCase()
          )
      ) {
        const response = await axios.post(
          `${PATH_DATA_BASE}/contacts`,
          contact
        );
        return response.data;
      }
      alert(`${contact.name} is already in contacts`);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${PATH_DATA_BASE}/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
