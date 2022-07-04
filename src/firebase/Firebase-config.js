
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import {getFirestore,collection,getDocs} from"firebase/firestore"



const firebaseConfig = {
    // apiKey: "AIzaSyAvp2qV5vic85_YHSuOOzUzHZ4AVK2V5kw",
    // authDomain: "somapamoja-decee.firebaseapp.com",
    // projectId: "somapamoja-decee",
    // storageBucket: "somapamoja-decee.appspot.com",
    // messagingSenderId: "303105258289",
    // appId: "1:303105258289:web:e7d091ade91e1457a2b610"

    apiKey: "AIzaSyC2war6puazMATQC1VHzPoVdtfdHR6Kj4E",
  authDomain: "testusers-68886.firebaseapp.com",
  projectId: "testusers-68886",
  storageBucket: "testusers-68886.appspot.com",
  messagingSenderId: "273436972718",
  appId: "1:273436972718:web:85d3235e7a9641b5083f3f"



  // apiKey: "AIzaSyAICYObuvzXXWfbVIu7D1xzKSZzLepEG5Y",
  // authDomain: "soma-pamoja-data-base2.firebaseapp.com",
  // projectId: "soma-pamoja-data-base2",
  // storageBucket: "soma-pamoja-data-base2.appspot.com",
  // messagingSenderId: "314083903085",
  // appId: "1:314083903085:web:74c822d7a1b69572b52164"

  // apiKey: "AIzaSyDv-1eT5N9ZpmG27m46D1UktZahhqx6f7A",
  // authDomain: "sponsoredstudents-f34d6.firebaseapp.com",
  // projectId: "sponsoredstudents-f34d6",
  // storageBucket: "sponsoredstudents-f34d6.appspot.com",
  // messagingSenderId: "1078269927688",
  // appId: "1:1078269927688:web:d559ebce25435a5480ccbd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);
  export const auth=getAuth(app)
 export  const db=getFirestore()
  export const colRef=collection(db,'waiting-List')
   




 