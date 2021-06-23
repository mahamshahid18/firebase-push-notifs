import React, { useEffect } from 'react';
import './App.css';
import { initializeFirebase, messaging } from './firebase-setup';

const handleNotification = (title: string, options?: any) => {
  if (Notification.permission === 'granted') {
    const notification = new Notification(title, options);
    console.log('notification sent', notification);
  } else {
    Notification.requestPermission().then(() => {
      handleNotification(title, options);
    }).catch((err) => {
      console.log('Permission denied - Error occurred');
      throw err;
    })
  }
}

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = React.useState<boolean>(false);

  useEffect(() => {
    initializeFirebase();
    setFirebaseInitialized(true);
  }, []);
  
  useEffect(() => {
    if (firebaseInitialized && messaging !== undefined) {
      messaging.getToken({ vapidKey: 'BNSeVyanbLq1HaODEBp7KBPsWgoiKkgFbnFlxOfKFw58ztdRuuSmvpvFaFWFX-oFwY9HZhzcQAGroahE-nTpLwc' }).then((currentToken: any) => {
        if (currentToken) {
          console.log('token already exists...');
          console.log(currentToken);
          // alert(currentToken);
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err: any) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
    }
  }, [firebaseInitialized]);

  useEffect(() => {
    if (firebaseInitialized && messaging !== undefined) {
      messaging.onMessage((payload: any) => {
        console.log('Message received. ', payload);

        const { notification: { title, body, image } } = payload;
        const notificationTitle = title;
        const notificationOptions = {
          body,
          icon: image
        };

        handleNotification(notificationTitle, notificationOptions);
      });
    }
  }, [firebaseInitialized]);
  

  return (
    <div className="App">
      <p>This is a firebase push-notifications test-app</p>
    </div>
  );
}

export default App;
