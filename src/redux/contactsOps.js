import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "./auth/operations";

export const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${contactId}`);
      return data.contactId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await goitApi.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
