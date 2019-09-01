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

// CREATE A USER PROFILE DOCUMENT (DOCUMENT IS AN ENTRY/DATA). THE 'USERAUTH' IS THE DATA SEND BACK FROM GOOGLE
export const creatreUserProfileDocument = async (userAuth, additionalData) => {
    // CHECK IF THE USER EXISTS
    if (!userAuth) return false;

    // UID IS UNIQUE USER IS
    const userRef  = firestore.doc(`/users/${userAuth.uid}`);
    // SNAPHOT IS DATA THATS CURRENTLY IN THE DATABASE
    const snapShot = await userRef.get();

    if (!snapShot.exists)
    {
        // GET DATA FROM USER
        const { displayName, email } = userAuth;
        const createdAt              = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating an user', error);
        }
    }

    return userRef;
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