import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('contacts', body);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
