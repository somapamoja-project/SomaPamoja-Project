import React from 'react'
import owllearningimg from '../../../Images/owlteacher.png'
import { useNavigate } from 'react-router-dom'

import'../style.css'

export default function GoingOnlineSafely() {
  const navigate1=useNavigate()

  const LinkVideo="https://www.youtube.com/embed/HxySrSbSY7o?theme=dark&color=black"

  return (
<div className='containerFC'> 
   <h1> GOING ONLINE SAFELY</h1>
   <p>Watch this Video to Learn More about Going Online Safely </p>
    <img src={owllearningimg} alt='loading...'/>
    <div className='QCF2' > 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
    <button  className="btn btn-success"  id='btnEmail'> <a href='https://www.esafety.gov.au/kids/I-want-help-with/being-safe-online' target='_blank'>10 Rules to go Safely on Internet</a></button>
    </div>
    </div>)
  
}
