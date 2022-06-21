import React from 'react'
import owllearningimg from '../../../Images/owlteacher.png'
import { useNavigate } from 'react-router-dom'

import'../style.css'

export default function CreateEmailing() {
    const navigate1=useNavigate()

  const LinkVideo="https://www.youtube.com/embed/VWoW5izqzoE?theme=dark&color=black"

  return (
<div className='containerFC'> 
   <h1> CREATE AN EMAIL</h1>
   <p>Watch this Video to Learn More about Basics Of Create an Email </p>
    <img src={owllearningimg} alt='loading...'/>
    <div className='QCF2' > 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
    <button  className="btn btn-success"  id='btnEmail' onClick={()=>{navigate1("/CreateEmail")}} >Create your Email</button>
    </div>
    </div>)
}
