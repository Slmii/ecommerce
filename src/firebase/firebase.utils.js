import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey:            'AIzaSyAmm0qF-ADCFvBPYGrqEvusGTgjCULDzzg',
    authDomain:        'ecommerce-db-daa9b.firebaseapp.com',
    databaseURL:       'https://ecommerce-db-daa9b.firebaseio.com',
    projectId:         'ecommerce-db-daa9b',
    storageBucket:     '',
    messagingSenderId: '168078920155',
    appId:             '1:168078920155:web:282dec382edd5317'
};

firebase.initializeApp(config);

export const auth      = firebase.auth();
export const firestore = firebase.firestore();

// GOOGLE AUTH PROVIDER CLASS (LIBRARY)
const provider = new firebase.auth.GoogleAuthProvider();
// TRIGGER THE GOOGLE SELECT ACCOUNT POPUP
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;