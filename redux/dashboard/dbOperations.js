import {
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, storage } from "../../firebase/config";

// import { addDoc, collection } from "firebase/firestore"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

export const uploadPhotoToServer = createAsyncThunk(
  "media/uploadphoto",
  async ({ photo, path }, { rejectWithValue }) => {
    try {
      const response = await fetch(photo);
      const file = await response.blob();
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      const url = getDownloadURL(ref(storage, path));
      return url;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);