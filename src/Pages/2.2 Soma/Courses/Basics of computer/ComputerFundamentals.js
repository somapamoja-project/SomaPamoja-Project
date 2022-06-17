import React from 'react'
import './style.css'
import owllearningimg from '../../../../Images/owlLearning.png'
import {useNavigate} from 'react-router-dom'

export default function ComputerFundamentals() {
  const navigate =useNavigate()
    const LinkVideo="https://www.youtube.com/embed/pLnN3ooJcqw"
  return (
    <div className='containerFC'> 
   <h1>COMPUTER FUNDAMENTALS</h1>
   <p>Watch this Video to Learn More about Computer Fundamentals </p>
    <img src={owllearningimg} alt='loading...'/>
    <div className='QCF'> 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button  class="btn btn-success" onClick={()=>{navigate('/HomeQuestions')}} >Start a Quiz</button>

    </div>
    
    </div> 

  )
}
