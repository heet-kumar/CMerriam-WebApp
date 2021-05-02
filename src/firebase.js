 import firebase from "firebase";

// const firebaseConfig={
//   apiKey:"AIzaSyDBvyyqdV630DffF6sVYP6v3TZWZjHxamg",
//   authDomain:"mui-message.firebaseapp.com",
//   databaseURL:"https://mui-message-default-rtdb.firebaseio.com",
//   projectId:"mui-message",
//   storageBucket:"mui-message.appspot.com",
//   messagingSenderId:"506461386312",
//   appId:"1:506461386312:web:45f666e6778fed26d9ca7d",
//   measurementId:"G-HVDGKL164W"
// }
console.log(process.env.PROJECT_ID)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

export default db;
