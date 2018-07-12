import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgqN4PnWXCIxSzm73Cj0UitO7GJQCqVPo",
        authDomain: "friends-1c05a.firebaseapp.com",
        databaseURL: "https://friends-1c05a.firebaseio.com",
        projectId: "friends-1c05a",
        storageBucket: "friends-1c05a.appspot.com",
        messagingSenderId: "1026485834176"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
