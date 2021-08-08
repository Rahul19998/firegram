import  firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCSI-RM_TDI6x0PyH_uA7EHfV02FOP4DU",
    authDomain: "react-firegram-9c020.firebaseapp.com",
    projectId: "react-firegram-9c020",
    storageBucket: "react-firegram-9c020.appspot.com",
    messagingSenderId: "334986505277",
    appId: "1:334986505277:web:3e59df2a7f945eeff68e54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp}