import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set,update } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQnLa4Xe4W9t9vKoVNhkRxiTZTqx-MJSk",
  authDomain: "fire-tangi-guru.firebaseapp.com",
  databaseURL: "https://fire-tangi-guru-default-rtdb.firebaseio.com",
  projectId: "fire-tangi-guru",
  storageBucket: "fire-tangi-guru.appspot.com",
  messagingSenderId: "687040831958",
  appId: "1:687040831958:web:a9270e715fd659c8628477",
  measurementId: "G-SSQRRD1X8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const getUser = (userId) => {
  return new Promise(function(resolve, reject){
    const db = getDatabase();
  const starCountRef = ref(db, 'users/' + userId);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    resolve(data) 
  });
});
  
}

export const writeUserData = async (userId, data) => {
  const db = getDatabase();
  await set(ref(db, 'users/' + userId), data);
}

export const writeUserResults = async (userId, data) => {
  const updates = {}
  updates[`/users/${userId}/subjects`] = data;
  const db = getDatabase();
  await update(ref(db), updates)
}

export default app;
