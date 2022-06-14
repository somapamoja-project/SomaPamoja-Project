import React from 'react'
import owllearningimg from '../../../../Images/owlLearning.png'

function PartyOfComputer() {
    const LinkVideo="https://www.youtube.com/embed/3VNm3HGTuHY"
  return (
    <div className='containerFC'> 
    <h1> SOFTWARE AND HARDWARE</h1>
    <p>Watch this Video to Learn More about Software And Hardware</p>
     <img src={owllearningimg} alt='loading...'/>
     <div className='QCF'> 
     <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
     <button  class="btn btn-success" >Start a Quiz</button>
     </div>
     </div>
  )
}

export default PartyOfComputer