import React from 'react'
import owllearningimg from '../../../../Images/owlLearning.png'

export default function WorkingWindows() {
    const LinkVideo="https://www.youtube.com/embed/8d9FY3LpR4E"
  return (
    <div className='containerFC'> 
    <h1> WORKING WITH WINDOWS</h1>
    <p>Watch this Video to Learn More about Working With Windows</p>
     <img src={owllearningimg} alt='loading...'/>
     <div className='QCF'> 
     <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
     <button  class="btn btn-success" >Start a Quiz</button>
     </div>
     </div>
  )

}
