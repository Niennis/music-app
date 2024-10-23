import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAeTsPoP5rfmBAiB-ppW2FBjJm0qS5QpMc",
  authDomain: "music-app-4ef5f.firebaseapp.com",
  projectId: "music-app-4ef5f",
  storageBucket: "music-app-4ef5f.appspot.com",
  messagingSenderId: "949240633973",
  appId: "1:949240633973:web:0b98582ada98728f83f63c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
