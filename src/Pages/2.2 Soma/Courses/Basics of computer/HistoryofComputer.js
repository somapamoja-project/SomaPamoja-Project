import React from 'react'
import owllearningimg from '../../../../Images/owlLearning.png'
import './style.css'

export default function HistoryofComputer() {
    const LinkVideo="https://www.youtube.com/embed/G19ldX05Gb4"
  return (
<div className='containerFC'> 
   <h1> HISTORY AND GENERATIONS OF COMPUTER</h1>
   <p>Watch this Video to Learn More about History of Computer and Generations </p>
    <img src={owllearningimg} alt='loading...'/>
    <div className='QCF'> 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button  class="btn btn-success" >Start a Quiz</button>
    </div>
    </div>
  )
}
