import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn('VITE_FIREBASE_API'),
    authDomain: "yt-mern-blog-14e11.firebaseapp.com",
    projectId: "yt-mern-blog-14e11",
    storageBucket: "yt-mern-blog-14e11.firebasestorage.app",
    messagingSenderId: "175001318308",
    appId: "1:175001318308:web:9c4a38e0a5161b96d4c731"
    
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }