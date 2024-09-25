// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5FW09NSc1VzmhwAg90agxVFjDRFPAddI",
  authDomain: "sociallink-7666d.firebaseapp.com",
  projectId: "sociallink-7666d",
  storageBucket: "sociallink-7666d.appspot.com",
  messagingSenderId: "355757586134",
  appId: "1:355757586134:web:bd6a027f6cd51882c9fb77",
  measurementId: "G-JS5CZCMELH"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
