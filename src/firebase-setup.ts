import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCVeEmJNGqhFxdAknno_aY7BvZNQmZOiRE",
    authDomain: "push-notifs-33caa.firebaseapp.com",
    projectId: "push-notifs-33caa",
    storageBucket: "push-notifs-33caa.appspot.com",
    messagingSenderId: "997249174199",
    appId: "1:997249174199:web:cb8e06fdd0e0b053941b32"
};

export const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
    messaging = firebase.messaging();
}

export let messaging: any;