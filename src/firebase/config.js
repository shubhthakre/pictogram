import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAq0Kf8jhArvAH1g1Si42Pgj416S60AB6k",
  authDomain: "pic-togram.firebaseapp.com",
  databaseURL: "https://pic-togram-default-rtdb.firebaseio.com",
  projectId: "pic-togram",
  storageBucket: "pic-togram.appspot.com",
  messagingSenderId: "517058990185",
  appId: "1:517058990185:web:24b9f680ecd559ab3f92f8"
};
firebase.initializeApp(firebaseConfig);
const storageBucket = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { firestore, storageBucket, timestamp };