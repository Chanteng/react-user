import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBtQvcVhf3v0WCSdHdqTdgYGlPYPv7txGk",
    authDomain: "react-users-app-ed526.firebaseapp.com",
    projectId: "react-users-app-ed526",
    storageBucket: "react-users-app-ed526.appspot.com",
    messagingSenderId: "393651689671",
    appId: "1:393651689671:web:b7adc9476650d43dfbc6e2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;