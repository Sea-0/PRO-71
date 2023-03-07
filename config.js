import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyCxE_zFjJZQJWSu8lflpoF5tTw-ziFuOR4",
  authDomain: "pro71-7e7d4.firebaseapp.com",
  projectId: "pro71-7e7d4",
  storageBucket: "pro71-7e7d4.appspot.com",
  messagingSenderId: "275913652966",
  appId: "1:275913652966:web:ddb8c35095c174d0119927"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
