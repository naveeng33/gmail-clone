import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsoWjc6rNhpbu1CsKkGOpgClV6e1QGI70",
  authDomain: "clone-c0d84.firebaseapp.com",
  projectId: "clone-c0d84",
  storageBucket: "clone-c0d84.appspot.com",
  messagingSenderId: "280551289177",
  appId: "1:280551289177:web:45fe93ebc39f1fe061dc48",
  measurementId: "G-L98BFB7ZCG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
