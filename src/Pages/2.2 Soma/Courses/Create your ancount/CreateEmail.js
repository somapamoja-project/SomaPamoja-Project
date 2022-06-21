import React from 'react'
import { useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import './style.css'

export default function CreateEmail() {
    const [age,setAge]=useState("")
   const yourYear=()=>{ 
    const year=Number( document.getElementById("exampleInputEmail1").value)
   
    
 if(Number( year)<=0){
    setAge('This can not be a year')
    
 } 
 else if ( Number(year.toString().length)!==4)
{
  setAge('This is not a year')
}
else if(Number(year)>=2009){
  setAge('You are too young to create a Gmail account')

}
else{
  setAge(<a href="https://accounts.google.com/signup/v2/webcreateaccount?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&dsh=S-201308151%3A1655548717229780&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank" >Create your Gmail</a>)

}
}

  return (
    <div>
        
        <div class="form-group">
    <label for="exampleInputEmail1">Which Year were you born?</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Year"/>

 
        <button onClick={yourYear}  class="btn btn-primary" id='btnSubmitAge'>Submit</button>
        <h1 id='btnSubmitAge1'>{age}</h1>
        </div>
    </div>
  )
}
