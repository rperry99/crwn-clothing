import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFiGKCu7eBuEm1ReENWc_vvSW9PEdWBH0",
    authDomain: "crwn-db-1cdb8.firebaseapp.com",
    databaseURL: "https://crwn-db-1cdb8.firebaseio.com",
    projectId: "crwn-db-1cdb8",
    storageBucket: "crwn-db-1cdb8.appspot.com",
    messagingSenderId: "846763908357",
    appId: "1:846763908357:web:fde8f14f804fbc5349eb6c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;