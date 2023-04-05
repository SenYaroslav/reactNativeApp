import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASKwmFpKXG2u62nQsx-id9Mm7rwoVnHcs",
  authDomain: "rn-app-da199.firebaseapp.com",
  projectId: "rn-app-da199",
  storageBucket: "rn-app-da199.appspot.com",
  messagingSenderId: "867922707531",
  appId: "1:867922707531:web:89066f9859eb1a83f539ce",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
