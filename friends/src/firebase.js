import firebase from 'firebase';

const config = {
   //insert firebase credentials here. Previously committed temp credentials have been removed.
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
