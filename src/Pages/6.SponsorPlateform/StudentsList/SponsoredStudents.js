import React from 'react'
import { colRef } from "../../../firebase/Firebase-config";
import { getDocs } from "firebase/firestore";
import { useState, useCallback } from "react";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css'


export default React.memo( function SponsoredStudents() {
  const oneData=[]
  const [List,setList]=useState([]) 
   
  async function FetchDoc(){
   
  try{  await getDocs(colRef).then((allDocs) => {
    var studentsList = []
  
  allDocs.docs.forEach((doc) => {
    studentsList.push( {...doc.data() });
    
   return setList(studentsList)
  })
  
  
  
  })
  .catch((e)=>{
  console.log(e.message)
  })}
  catch(err){
console.log(err.message)
  }



}

  


  
  ;

  
 

  List.map((e)=>{return oneData.push( e.FullNames,oneData.Gender)})
  console.log(oneData)

 

useEffect(()=>{
  FetchDoc();

 
}, [])



  return (
    <div>
      
       <h1>List of Sponsored Students</h1>
       <table className='table'>
  <tr>
    <th>Full Names </th>
    <th>Gender</th>
    <th>Pay for him or her</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
    
    </div>
  )
})
