import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAvp2qV5vic85_YHSuOOzUzHZ4AVK2V5kw",
    authDomain: "somapamoja-decee.firebaseapp.com",
    projectId: "somapamoja-decee",
    storageBucket: "somapamoja-decee.appspot.com",
    messagingSenderId: "303105258289",
    appId: "1:303105258289:web:e7d091ade91e1457a2b610"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  



  export const auth=getAuth(app)


 