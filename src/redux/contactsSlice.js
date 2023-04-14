import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts } from './operations';
import { addContact } from './operations';

// const contactsInitialValue = [
// { id: 0, name: 'Rosie Simpson', number: '555-12-24' },
// { id: 1, name: 'Diana', number: '555-12-45' },
// { id: 2, name: 'Kookie', number: '2233312' },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload); //immer
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

//  extraReducers: {
//   [fetchContacts.pending]: handlePending,
//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
// },
// [fetchContacts.rejected]: handleRejected,
//   [addContact.pending]: handlePending,
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items.push(action.payload);
//   },
//   [addContact.rejected]: handleRejected,
//   [deleteContact.pending]: handlePending,
//   [deleteContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//   }
//  }

// reducers: {
//   addContact: {
//     reducer(state, action) {
//       state.value.push(action.payload);
//     },
//     prepare({ name, number }) {
//       return {
//         payload: {
//           id: nanoid(),
//           name,
//           number,
//         },
//       };
//     },
//   },
//   deleteContact(state, action) {
//     const index = state.value.findIndex(
//       contact => contact.id === action.payload
//     );
//     state.value.splice(index, 1);
//   },
// },
// });
