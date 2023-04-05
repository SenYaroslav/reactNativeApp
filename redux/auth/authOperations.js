import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpUser = createAsyncThunk(
  "auth/signup",
  async ({ email, password }) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user returned from signUP function > > > ', user)

    } catch (error) {
      console.log("error", error.code);
      console.log("error.message", error.message);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signin",
  async ({ email, password }) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('user returned from signIN function > > > ', user)
    } catch (error) {
      console.log("error", error.code);
      console.log("error.message", error.message);
    }
  }
);
