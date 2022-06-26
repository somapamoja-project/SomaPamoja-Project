import { colRef } from "../../firebase/Firebase-config";
import React from "react";
import { getDocs } from "firebase/firestore";
import { useState } from "react";

import StudentProp from '../6.SponsorPlateform/StudentsList/StudentProp'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


export default function WaitingList() {
  const [List,setList]=useState([])
  ;
  async function display(){
    await getDocs(colRef).then((allDocs) => {
      var studentsList = []
 
    allDocs.docs.forEach((doc) => {
      studentsList.push({ ...doc.data(), id: doc.id });
      setList(studentsList)
    })
    
    
  
  })
  .catch((e)=>{
    console.log(e.message)
  })

  };display()
  var pathway=`/Payment-via-Mpesa`
 
  const oneData=[]
 
  List.map(
    (e)=>{
      oneData.push(e.FullNames,e.Reason)
    }
  )
 
  

  
  
  return (
   
            

             <>
             </>
            )
  }
