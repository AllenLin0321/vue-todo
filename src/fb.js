import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCyrf1Kq6VV3XNbhdR-GmSMAJzFsm13GL8",
    authDomain: "vue-todo-5d833.firebaseapp.com",
    databaseURL: "https://vue-todo-5d833.firebaseio.com",
    projectId: "vue-todo-5d833",
    storageBucket: "vue-todo-5d833.appspot.com",
    messagingSenderId: "887371286810",
    appId: "1:887371286810:web:bb1f50b318cabf8b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;