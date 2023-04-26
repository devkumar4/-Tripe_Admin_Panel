
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCEhtriMa4otiAOi_ETFK4veqEvdsbmXog",
    authDomain: "foodapp-a5c65.firebaseapp.com",
    projectId: "foodapp-a5c65",
    storageBucket: "foodapp-a5c65.appspot.com",
    messagingSenderId: "63578862922",
    appId: "1:63578862922:web:e237c941352fe8cf52fdb3",
    measurementId: "G-YB7RPWSWVZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { db, storage };