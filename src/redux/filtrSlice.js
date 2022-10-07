import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (state, {payload}) => state = payload,
  },
});

export const { filterContacts } = filterSlice.actions;


