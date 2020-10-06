import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
// require('dotenv').config();
//
// const firebaseConfig = {
//   apiKey: process.env.REACT_NATIVE_APP_API_KEY,
//   authDomain: process.env.REACT_NATIVE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_NATIVE_DATABASE_URL,
//   projectId: process.env.REACT_NATIVE_PROJECT_ID,
//   storageBucket: process.env.REACT_NATIVE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_NATIVE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_NATIVE_APP_ID
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCnKeoY-qE3CyK_zXu7wpghMdpJN100tE8',
  authDomain: 'afternoon-tea-789df.firebaseapp.com',
  databaseURL: 'https://afternoon-tea-789df.firebaseio.com',
  projectId: 'afternoon-tea-789df',
  storageBucket: 'afternoon-tea-789df.appspot.com',
  messagingSenderId: '678571585956',
  appId: '1:678571585956:ios:430cd88b8e033036f41131'
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
