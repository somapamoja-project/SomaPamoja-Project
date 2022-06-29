import React from "react";

import { colRef } from "../../firebase/Firebase-config";
import { addDoc } from "firebase/firestore";
import "./Style.css";

function FormForWaitingList() {
  function Display(e) {
    e.preventDefault();
    let FullName = document.getElementById("fullNames");
    let Agesponsor = document.getElementById("agesponsor");
    let Nationality = document.getElementById("nationality");
    let status = document.getElementById("Status");
    let Reason = document.getElementById("Reason");
    let Interest = document.getElementById("Interest");
    let Gender=document.getElementById('Gender')
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
    <div>
      {" "}
      <h1>Form For Waiting List to be sponsored</h1>
      <form action="" Id='form1' onSubmit={Display} className="container">
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
        <label for="Status">Status(refugee or host community):</label>
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
        <button type="submit" value="Submit" onClick={Display}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormForWaitingList;
