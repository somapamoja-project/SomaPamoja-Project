import React from 'react'
import './style.css'
import owllearningimg from '../../../../Images/owlLearning.png'
import Embed from 'react-embed';
export default function ComputerFundamentals() {
    const LinkVideo="https://www.youtube.com/embed/pLnN3ooJcqw"
  return (
    <div className='containerFC'> 
   <h1>COMPUTER FUNDAMENTALS</h1>
    
    <img src={owllearningimg} alt='loading...'/>
    <div className='QCF'> 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button  class="btn btn-success" >Start a Quiz</button>
    
    
    <p>Watch this Video to Learn More about Computer Fundamentals </p>
    
    
    </div>
    
    </div> 

  )
}
