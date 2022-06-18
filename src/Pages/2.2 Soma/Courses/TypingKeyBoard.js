import React from 'react'
 import owllearningimg from '../../../Images/owlteacher.png'
 import '../style.css'
 import { useNavigate } from 'react-router-dom'

export default function TypingKeyBoard() {
  const navigate=useNavigate()
    const LinkVideo="https://www.youtube.com/embed/2S3lhm8LaZo?theme=dark&color=black"
  return (
   <div className='containerFC'> 
   <h1>  TYPING ON KEYBOARD </h1>
   <p>Watch this Video to Learn More about Basics Of Typing on KeyBoard</p>
    <img src={owllearningimg} alt='loading...'/>
    <div className='QCF1'> 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
    <button  className="btn btn-success" id='btnPractice'  onClick={()=>{navigate('/TypingPratice')}} > Practice On KeyBoard</button>
    </div>
    </div>)
}
