import React from "react";
import './Style.css'
import googlemap from '../../Images/googlemap.png'; // gives image path

function Contact() {
    return (
        <>
    <label>
        <input id="name" type="text" placeholder="Name*" />
     </label>

     <label>
        <input id="email" type="text" placeholder="Email*" />
     </label>

      <label>
         <input id="number" type="number" placeholder="Phone Number" />
      </label>

      <label>
         <input id="message" type="text" placeholder="Message" />
      </label>

      <button type="button" class="btn btn-danger">Submit</button>
      
      <img src={googlemap} className="googlemap" alt="loading..." />

      <h2>Don't forget to leave a comment or a message </h2>
      
</>
    );
}

export default Contact;