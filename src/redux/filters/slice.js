import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SearchString: "",
};

const slice = createSlice({
  name: "filContacts",
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.SearchString = action.payload;
    },
  },
});

export const filContactsReducer = slice.reducer;
export const { changeSearch } = slice.actions;
