import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCyWhzYtkGLHewukFWR5UcIuzJaIMw5y1Q",
    authDomain: "crwn-db-f99dd.firebaseapp.com",
    databaseURL: "https://crwn-db-f99dd.firebaseio.com",
    projectId: "crwn-db-f99dd",
    storageBucket: "crwn-db-f99dd.appspot.com",
    messagingSenderId: "831223155456",
    appId: "1:831223155456:web:f15a06760b03cbf81bc1e5",
    measurementId: "G-KHTVCQT8KG"
  };

  firebase.initializeApp(config);


  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;