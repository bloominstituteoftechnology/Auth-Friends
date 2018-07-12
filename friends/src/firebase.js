import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyALOAZIsePrVFG0voKxG4WWc1zgzztUzmo",
    authDomain: "friends-d7d17.firebaseapp.com",
    databaseURL: "https://friends-d7d17.firebaseio.com",
    projectId: "friends-d7d17",
    storageBucket: "friends-d7d17.appspot.com",
    messagingSenderId: "601138510393"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
