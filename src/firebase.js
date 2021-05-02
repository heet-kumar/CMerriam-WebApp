
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

const firebaseConfig = {
    apiKey: "AIzaSyB87RcxV2EfE6Bl1L1hDtwnygPKv6oUrnQ",
    authDomain: "covid-resources-94d93.firebaseapp.com",
    databaseURL: "https://covid-resources-94d93-default-rtdb.firebaseio.com",
    projectId: "covid-resources-94d93",
    storageBucket: "covid-resources-94d93.appspot.com",
    messagingSenderId: "105314665680",
    appId: "1:105314665680:web:d0fd2ffe2d9ad214d84ad5"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

export default db;
