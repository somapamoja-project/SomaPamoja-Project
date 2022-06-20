import React from "react";
import './Style.css'
import googlemap from '../../Images/googlemap.png'; // gives image path

function Contact() {
    return (
        <div class="container">
  
    <h2>Contact Us</h2>
    <p>Swing by to introduce your kids into coding, or leave us a message:</p>
  

      <img src={googlemap} className='googlemap' alt='nature' width='60' height='40'/>

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="kakuma">Kakuma</option>
          <option value="kalobeyei">Kaloboyei</option>
          <option value="kakuma-town">Kakuma Town</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
        <input type="submit" value="Submit"/>
        
      
</div>
    );
}

export default Contact;