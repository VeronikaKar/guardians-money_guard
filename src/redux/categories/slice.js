import { createSlice } from "@reduxjs/toolkit";
import { categoriesThunk } from "./operations";

const initialState = {
  categories: [],
};

const slice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(categoriesThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});
export const categoriesReducer = slice.reducer;
