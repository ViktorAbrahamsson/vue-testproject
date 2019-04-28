import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyChp4kqsyOO7B7lOGADJX-hXp4HS9fwcJk",
    authDomain: "todowictrec.firebaseapp.com",
    databaseURL: "https://todowictrec.firebaseio.com",
    projectId: "todowictrec",
    storageBucket: "todowictrec.appspot.com",
    messagingSenderId: "390139216507"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;

