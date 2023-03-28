import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCFXOuf8pvdCpqtxA4Fh38axsNZ0aM-3iI",
  
    authDomain: "linkedin-clone-2ac24.firebaseapp.com",
  
    projectId: "linkedin-clone-2ac24",
  
    storageBucket: "linkedin-clone-2ac24.appspot.com",
  
    messagingSenderId: "317665943042",
  
    appId: "1:317665943042:web:45c91e6c4bf5b3f64e511b"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };