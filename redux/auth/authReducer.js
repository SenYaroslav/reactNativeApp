import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./authOperations";

const initialState = {
  email: null,
  password: null,
  login: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      signUpUser.fulfilled,
      (state, { payload }) => (state = payload)
    );
  },
});

const authReducer = authSlice.reducer;

export default authReducer;