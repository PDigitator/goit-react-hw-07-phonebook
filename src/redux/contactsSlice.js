import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
