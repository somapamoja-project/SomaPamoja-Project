import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../../firebase/Firebase-config'
import {useState} from 'react'

 function User() {
  const [user,setUser]=useState([])
  var UserEmail=document.getElementById('userEmail')
 

 
         

   useEffect(()=>{
    try{   onAuthStateChanged(auth, (currentUser) => {
      var user=  currentUser
      console.log(user)
      var dataInfos=[user.displayName,]
      console.log(dataInfos)
     
     
     return 
   
    })   } 
    catch(err){ console.log(err.message)} 
   } ,[])


  return (
    <div>
      <h1 id='userEmail'></h1>
    </div>
  )
}

export default User