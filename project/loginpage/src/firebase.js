import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBflOt95-GfuGLGfKn7303ltl9DAu7wOzw",
  authDomain: "auth-dev-a285f.firebaseapp.com",
  projectId: "auth-dev-a285f",
  storageBucket: "auth-dev-a285f.appspot.com",
  messagingSenderId: "554456809698",
  appId: "1:554456809698:web:4c728c41a0ea92a95d5ebb",
  measurementId: "G-QTM0SSP5KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
