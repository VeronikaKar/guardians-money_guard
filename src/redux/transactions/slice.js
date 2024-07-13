import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  isError: false,
  isLoader: false,
};

const slice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});
