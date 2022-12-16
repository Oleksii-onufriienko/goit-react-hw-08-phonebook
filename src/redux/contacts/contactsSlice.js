import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });

    builder.addCase(addContact.pending, (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = [action.payload, ...state.contacts.items];
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });

    builder.addCase(deleteContact.pending, (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = '';
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const contactId = action.payload.id;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== contactId
      );
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
  },
});

export const contactReducer = contactsSlice.reducer;
