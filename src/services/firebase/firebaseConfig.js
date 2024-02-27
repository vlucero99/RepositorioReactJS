

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVJlrwdzO1prdpgmZMQHEaUpO8BidAFAQ",
  authDomain: "dejavu-a5ea1.firebaseapp.com",
  projectId: "dejavu-a5ea1",
  storageBucket: "dejavu-a5ea1.appspot.com",
  messagingSenderId: "340602353596",
  appId: "1:340602353596:web:e0b17d38c5449fc2549db9"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };