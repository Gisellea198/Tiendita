import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE3M4_jMi1X8aYqtk1gbgR5qT3_oD_mRk",
  authDomain: "tienda-app-9a940.firebaseapp.com",
  projectId: "tienda-app-9a940",
  storageBucket: "tienda-app-9a940.appspot.com",
  messagingSenderId: "181569730282",
  appId: "1:181569730282:web:6e1de8210ba1041555c993",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export { db, google, facebook, firebase };
