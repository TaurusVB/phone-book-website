import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import toastifyMessage from 'utils/toastifyMessage';

const contactsInitialValue = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contacts = createSlice({
  name: 'contacts',
  initialState: contactsInitialValue,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);

    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      toastifyMessage('Your contact has been successfully added!');
    });
    builder.addCase(addContact.rejected, handleRejected);

    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
      toastifyMessage('Your contact has been successfully removed!');
    });
    builder.addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contacts.reducer;
