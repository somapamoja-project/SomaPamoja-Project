import React from 'react'




export default function FormPage() {
   


function SubmitProfile(event){
    event.preventDefault()
    const name=document.getElementById("birthDate")
    console.log(name.value)
}
  return (
    <div>
        <h1>Your Profile </h1>
        <form  onSubmit={SubmitProfile} >
        
        <input type='text' placeholder='Name' id='name1'/>
        <input type='text' placeholder='Surname' id='name2'/>
        <label> Date of Birthday</label>
        <input type='date' placeholder='Surname' id='birthDate'/>
        <button> Submit</button>
        </form>


    </div>
  )
}
