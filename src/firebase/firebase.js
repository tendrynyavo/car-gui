import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyACl-oduF3_8GtPAlCVYSUX08weAQwrTBg",
    authDomain: "ionic-2742c.firebaseapp.com",
    projectId: "ionic-2742c",
    storageBucket: "ionic-2742c.appspot.com",
    messagingSenderId: "452277799718",
    appId: "1:452277799718:web:c1b71f970d616fc1b8cfe7",
    measurementId: "G-LMGB83BJXC"
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'it';

export { auth, app };
