import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAVJlrwdzO1prdpgmZMQHEaUpO8BidAFAQ",
  authDomain: "dejavu-a5ea1.firebaseapp.com",
  projectId: "dejavu-a5ea1",
  storageBucket: "dejavu-a5ea1.appspot.com",
  messagingSenderId: "340602353596",
  appId: "1:340602353596:web:e0b17d38c5449fc2549db9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
