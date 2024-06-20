import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANzLJT24x-SjOiFETyXV7eURm0-1Rpc4o",
  authDomain: "ecommerce-39ed5.firebaseapp.com",
  projectId: "ecommerce-39ed5",
  storageBucket: "ecommerce-39ed5.appspot.com",
  messagingSenderId: "942775978126",
  appId: "1:942775978126:web:822d3e41810a76155621df"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };