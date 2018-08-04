import firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyBqxH7rirlrd3fujU0t4Zm6VgImFl8d5Ow",
  authDomain: "react-zen-spaces.firebaseapp.com",
  databaseURL: "https://react-zen-spaces.firebaseio.com",
  projectId: "react-zen-spaces",
  storageBucket: "react-zen-spaces.appspot.com",
  messagingSenderId: "1067422733564"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;