import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpjxSwjkR4wj4BTnzWdTMu2iL4r2kNojk",
  authDomain: "c71-62855.firebaseapp.com",
  projectId: "c71-62855",
  storageBucket: "c71-62855.appspot.com",
  messagingSenderId: "819199435378",
  appId: "1:819199435378:web:184fb56f37c50b634b18eb",
  measurementId: "G-4ZYM0VHD8J"
};
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

