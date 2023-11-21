import './App.scss';
import Home from './views/Home';
import ScrollToTop from 'react-scroll-to-top';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from 'react';


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

  // async function getCities(db) {
  //   const citiesCol = collection(db, 'partecipations');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   console.log(cityList);
  //   return cityList;
  // }



  // getCities(db);

  // async function add(db) {
  //   const docRef = await addDoc(collection(db, "cities",), {
  //     name: "Tokyo",
  //     country: "Japan"
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // }



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
      <Home />
    </>
  );
}

export default App;
