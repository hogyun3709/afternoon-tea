import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.REACT_NATIVE_APP_API_KEY,
  authDomain: process.env.REACT_NATIVE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_NATIVE_DATABASE_URL,
  projectId: process.env.REACT_NATIVE_PROJECT_ID,
  storageBucket: process.env.REACT_NATIVE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_NATIVE_ MESSAGING_SENDER_ID,
  appId: process.env.REACT_NATIVE_APP_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
