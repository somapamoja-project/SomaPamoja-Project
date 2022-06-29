import React from "react";

import { colRef } from "../../firebase/Firebase-config";
import { addDoc } from "firebase/firestore";
import "./Style.css";
import correct from '../../Images/FreeCourses/correct85.gif'
import { useNavigate } from "react-router-dom";

function FormForWaitingList() {
  const navigation2=useNavigate()
  function Submit(e) {
    e.preventDefault();
    let FullName = document.getElementById("fullNames");
    let Agesponsor = document.getElementById("agesponsor");
    let Nationality = document.getElementById("nationality");
    let status = document.getElementById("Status");
    let Reason = document.getElementById("Reason");
    let Interest = document.getElementById("Interest");
    let Gender=document.getElementById('Gender')

    document.getElementById('Notification').style.display='inline'
        document.getElementById('form1').style.filter='blur(8px)'


    addDoc(colRef, {
      FullNames: FullName.value,
      Age: Agesponsor.value,
      Nationality:Nationality.value,
      Status:status.value,
      Reason:Reason.value,
      Interest:Interest.value,
      Gender:Gender.value
    })
    .then(()=>{
        document.getElementById('form1').reset()
        
    })
    .catch((err)=>{
    
        
        console.log(err.message)
    })
  }

  return (
    <div className="container">

      
      
      <form action="" Id='form1' onSubmit={Submit} className="container">
      <h1 className="headerForm">Form For Waiting List to be sponsored</h1>
        <label for="fname">Full Names:</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="fullNames"
          placeholder="Full Names"
          required
        />
        <br/>
        <br/>
        <div>
        <label for="Your Gender">Choose your gender:</label>
  <select name="Gender" id="Gender">
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    </select>

        </div>
        <br />
        <br />
        <label for="Age">Age</label>
        <br />
        <input
          type="number"
          className="form-control"
          id="agesponsor"
          placeholder="   age"
          required
        />
        <br />
        <br />
        <label for="Nationality">Nationality:</label>
        <br />
        <input
          type="text"
          className="form-control"
          name="nationality"
          id="nationality"
          placeholder="Nationality"
          required
        />
        <br />
        <br />
        <label for="Status">Status(Refugee or Host Community):</label>
        <br />
        <input
          type="text"
          className="form-control"
          name="Status"
          id="Status"
          placeholder="Status"
        />
        <br />
        <br />

        <label for="Reason">Why you need to be sponsored ?(5 lines)</label>
        <br />
        <textarea
          type="text"
          className="form-control"
          name="Reason"
          id="Reason"
          placeholder="5 lines"
          required
        />
        <br />
        <br />
        <label for="Interest">What are you interesting in ?(5 lines) </label>
        <br />
        <textarea
          type="text"
          className="form-control"
          name="Interest"
          id="Interest"
          placeholder="5 lines"
          required
        ></textarea>
        <br />
        
        <button type="submit" className="btn btn-primary" value="Submit" onClick={Submit}>
          Submit
        </button><br/>
      </form>
      <div className="Notification" id="Notification">
          <img src={correct} alt='loading...' />
          <h1>Your submission  is <br/>  under process.<br/> If you are sponsored ,<br/> you will see your name on the precedent List</h1>
          <button className="btn btn-secondary" onClick={()=>{ return navigation2('/FreeCourses')}} >Go To free Courses</button>
          <button className="btn btn-secondary" onClick={()=>{ return navigation2('/List-Of-Sponsored-Students')}} >Check The List</button>
        </div>
        
    </div>
  );
}

export default FormForWaitingList;
