import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATAuouf5Cts-q-Snh5Ek2iIhNynEoByTw",
  authDomain: "whatsapp-clone-ad870.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-ad870.firebaseio.com",
  projectId: "whatsapp-clone-ad870",
  storageBucket: "whatsapp-clone-ad870.appspot.com",
  messagingSenderId: "1098470868978",
  appId: "1:1098470868978:web:5984eddaf10f20e71ecd6b",
  measurementId: "G-ZW577LYZSH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
