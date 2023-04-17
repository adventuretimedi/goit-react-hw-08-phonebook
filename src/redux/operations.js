import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const response = await axios.get('contacts');
      if (response.data.length === 0) {
        throw new Error('there are no comntacts, your cheems');
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// --> зміна слайсу

// додати реалізацію додавання

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// додати видалення контакту

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = axios.delete(`contacts/${id}`);
      return (await response).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
