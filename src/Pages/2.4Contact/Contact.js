import React from "react";
import './Style.css'
import googlemap from '../../Images/googlemap.png'; // gives image path

function Contact() {
    return (
      
        <div class="container51">
          <div className="container">
    
    <h2>Contact Us</h2>
    <p className="comment">Swing by to introduce your kids into coding, or leave us a message:</p>
  

      <img src={googlemap} className='googlemap' alt='nature' width='60' height='40'/>

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="lname">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email.."/>
        <label for="country">Location</label>
        <select id="location" name="location" className="section">
          <option value="kakuma">Kakuma</option>
          <option value="kalobeyei">Kaloboyei</option>
          <option value="kakuma-town">Kakuma Town</option>
        </select>
        <label for="subject">Message</label>
        <textarea id="message" name="message" placeholder="Write something.." style={{ color: 'chocolate', lineHeight : 10, padding: 10 }}></textarea>
        <input type="submit" value="Submit"/>
        
      
</div>
</div>
    );
}

export default Contact;