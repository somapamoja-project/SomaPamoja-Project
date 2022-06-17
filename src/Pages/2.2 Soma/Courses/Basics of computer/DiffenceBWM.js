import React from 'react'
import owllearningimg from '../../../../Images/owlLearning.png'
import './style.css'


export default function DiffenceBWM() {
    const LinkVideo="https://www.youtube.com/embed/UC1MmZA5I38?theme=dark&color=black"
    return (
  <div className='containerFC'> 
     <h1> DIFFERENCE BETWEEN WINDOWS AND MAC</h1>
     <p>Watch this Video to Learn More about Difference between Windows and Mac  </p>
      <img src={owllearningimg} alt='loading...'/>
      <div className='QCF'> 
      <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
      <button  class="btn btn-success" >Start a Quiz</button>
      </div>
      </div>
    )
}
