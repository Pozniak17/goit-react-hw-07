// import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./contactsOps";

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Генератори екшенів
// export const { addContacts, deleteContacts } = contactsSlice.actions;

export const { fetchingInProgress, fetchingSuccess, fetchingInError } =
  contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// export const selectContact = (state) => state.contacts.items;
export const getContacts = (state) => state.contacts;
export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;
