import { createSlice } from "@reduxjs/toolkit";
import { uploadPhotoToServer, delPhoto, updateAvatar } from "./mediaOperations";
import { signup, signin, signout, refresh } from "../auth/authOperations";

const initialState = {
  isLoading: false,
  photo: null,
  error: null,
};

const mediaSlice = createSlice({
  name: "media",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(uploadPhotoToServer.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(uploadPhotoToServer.fulfilled, (state, { payload }) => {
        state.uri = payload;
        state.isLoading = false;
      })
      .addCase(uploadPhotoToServer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(delPhoto.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(delPhoto.fulfilled, (state) => {
        state.uri = null;
        state.isLoading = false;
      })
      .addCase(delPhoto.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateAvatar.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAvatar.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

const mediaReducer = mediaSlice.reducer;

export default mediaReducer;
