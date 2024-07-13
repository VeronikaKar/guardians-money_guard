import { createAsyncThunk } from "@reduxjs/toolkit";
import { guardApi } from "../../config/guardApi";

export const getTransactionsThunk = createAsyncThunk(
  "fetchTransaction",
  async (_, thunkApi) => {
    try {
      const { data } = await guardApi.get("/api/transactions");
      console.log(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addTransactionsThunk = createAsyncThunk(
  "addTransaction",
  async (transaction, thunkApi) => {
    try {
      const { data } = await guardApi.post("/api/transactions", transaction);
      console.log(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
