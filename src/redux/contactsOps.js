import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6602f96b9d7276a75554be5d.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
