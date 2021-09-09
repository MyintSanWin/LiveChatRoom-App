import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCvjJpX8LXQCn1EQmhOIjQ2Af-DeNeMh-E",
  authDomain: "vue-blog-system-392dd.firebaseapp.com",
  projectId: "vue-blog-system-392dd",
  storageBucket: "vue-blog-system-392dd.appspot.com",
  messagingSenderId: "506235083100",
  appId: "1:506235083100:web:a82abdce7b20229d79c999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export{db,timestamp}