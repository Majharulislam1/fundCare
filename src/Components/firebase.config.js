import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9sQwhNG7h7Mp7AN70O7vSDBjw4oQCYek",
  authDomain: "fundcare-6c7d0.firebaseapp.com",
  projectId: "fundcare-6c7d0",
  storageBucket: "fundcare-6c7d0.firebasestorage.app",
  messagingSenderId: "850456770013",
  appId: "1:850456770013:web:9dea948b0ff62a05a2f234"
};

// Initialize Firebase
 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;