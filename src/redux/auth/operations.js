import { createAsyncThunk } from "@reduxjs/toolkit";
import { guardApi } from "../../config/guardApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await guardApi.post("/api/auth/sign-up", credentials);
      console.log(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await guardApi.post("/api/auth/sign-in", credentials);
      console.log(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await guardApi.delete("/api/auth/sign-out");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk("refresh", async (_, thunkApi) => {
  try {
    const { data } = await guardApi.get("/api/users/current");
    console.log(data);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
