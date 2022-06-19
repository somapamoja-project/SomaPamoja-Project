import React from "react";
import './Style.css'
import googlemap from '../../Images/googlemap.png'; // gives image path

function Contact() {
    return (
        <div className="form">
    <label>
        <input id="name" type="text" placeholder="Name*" />
     
        <input id="email" type="text" placeholder="Email*" />
     

      
         <input id="number" type="number" placeholder="Phone Number" />
      

      
         <input id="message" type="text" placeholder="Message" />
      </label>

      <button type="button" class="btn btn-danger">Submit</button>
      
      <img src={googlemap} className="googlemap" alt="loading..." />

      <h2>Don't forget to leave a comment or a message </h2>
      
</div>
    );
}

export default Contact;