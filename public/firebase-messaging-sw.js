importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCVeEmJNGqhFxdAknno_aY7BvZNQmZOiRE",
    authDomain: "push-notifs-33caa.firebaseapp.com",
    projectId: "push-notifs-33caa",
    storageBucket: "push-notifs-33caa.appspot.com",
    messagingSenderId: "997249174199",
    appId: "1:997249174199:web:cb8e06fdd0e0b053941b32"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const { notification: { title, body, image } } = payload;
    const notificationTitle = title;
    const notificationOptions = {
        body,
        icon: image
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});