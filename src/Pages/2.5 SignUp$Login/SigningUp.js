import React from 'react'

import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithPopup,GoogleAuthProvider} from "firebase/auth";

import { auth } from "../../firebase/Firebase-config";
import'./style.css'
import SignUp from '../../Images/SignUp.png'


export default function SigningUp() {
   async function Submit(){
        var email=document.getElementById('Email').value
        var password=document.getElementById('Password').value
        var UserEmail=document.getElementById('userEmail')
       

        try {
            await createUserWithEmailAndPassword(auth,email,password);}
             catch (err) {
            console.log(err.message)
          }
         try{ onAuthStateChanged(auth, (currentUser) => {
            var user=  currentUser
            setTimeout(()=>{UserEmail.innerText=user.email},3000) 
         
          })  }
          catch(err){ console.log(err.message)}
          

        
          
    }
    async function Display(){
      const provider=new GoogleAuthProvider()
     await signInWithPopup(auth,provider)
     .then((user) =>{console.log(user)})
     .catch((err)=>{console.log(err)})
      

    }
   
  return (
    <div className='container'>
      <h1>Sign Up</h1>
     
        <div className='container4'>
     
        <input id='Email' type='text' placeholder='Email'/>
        </div>
       
        <div className='container4'>
       
        <input id='Password' type='password'  placeholder='Password' />
        </div>
        <button class="btn btn-primary" id='submitEmail' onClick={Submit}>Submit</button>
        <button onClick={Display} id='btnSignUp' ><img  src={ SignUp}/></button>
        <h1 id='userEmail'></h1>

    </div>
  )
  
}
