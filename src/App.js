import './App.scss';
import Home from './views/Home';
import ScrollToTop from 'react-scroll-to-top';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Admin from './views/Admin';


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCqSN8lZgiXeH1UrqDXZiLincCnfjD5nHU",
    authDomain: "matrimonio-ilaria-leonardo.firebaseapp.com",
    projectId: "matrimonio-ilaria-leonardo",
    storageBucket: "matrimonio-ilaria-leonardo.appspot.com",
    messagingSenderId: "217948023656",
    appId: "1:217948023656:web:ed4d429497838f9d5f04dd",
    measurementId: "G-XYY4G8SYP8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [login, setLogin] = useState(false);

  function goToLogin() {
    setLogin(!login);
  }

  return (
    <>
      <ScrollToTop smooth style={{
        borderRadius: '200px',
        padding: '10px',
        height: 'auto',
        width: 'auto',
        zIndex: 10,
        opacity: 0.9,
        color: 'white',
        backgroundColor: '#6869AA'
      }} color='white' />
      {login ? <Admin db={db} login={goToLogin} /> : <Home db={db} login={goToLogin} />}
    </>
  );
}

export default App;
