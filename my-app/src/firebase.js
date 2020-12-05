import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCnEGuITO27t2YqksdFqxCXSCupBMn4ttE",
    authDomain: "sustainability-goals.firebaseapp.com",
    projectId: "sustainability-goals",
    storageBucket: "sustainability-goals.appspot.com",
    messagingSenderId: "289006347020",
    appId: "1:289006347020:web:f6ba266dc5c6d1f5521f29",
    measurementId: "G-BV55TKXH5E"
  };

export const database = firebase.database();
export const auth = app.auth();
export default app;