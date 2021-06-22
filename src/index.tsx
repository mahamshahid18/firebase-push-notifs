import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVeEmJNGqhFxdAknno_aY7BvZNQmZOiRE",
  authDomain: "push-notifs-33caa.firebaseapp.com",
  projectId: "push-notifs-33caa",
  storageBucket: "push-notifs-33caa.appspot.com",
  messagingSenderId: "997249174199",
  appId: "1:997249174199:web:cb8e06fdd0e0b053941b32"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
