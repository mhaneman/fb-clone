// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDzh-zWlNnZSp6LqKKer0J-TTCZZoOLeRg",
    authDomain: "facebook-clone-1ad0d.firebaseapp.com",
    databaseURL: "https://facebook-clone-1ad0d.firebaseio.com",
    projectId: "facebook-clone-1ad0d",
    storageBucket: "facebook-clone-1ad0d.appspot.com",
    messagingSenderId: "477846422918",
    appId: "1:477846422918:web:cc7ed42b9c1f734c899807",
    measurementId: "G-X73ZQHG4BQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;