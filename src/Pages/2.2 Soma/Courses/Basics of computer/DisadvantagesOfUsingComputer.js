import React from 'react'
import owllearningimg from '../../../../Images/owlLearning.png'

export default function DisadvantagesOfUsingComputer() {
    const LinkVideo="https://www.youtube.com/embed/puuW-8X0NTE?theme=dark&color=black"
    return (
  <div className='containerFC'> 
     <h1> ADVANTAGES AND DISADVANTAGES  OF USING COMPUTER</h1>
     <p>Watch this Video to Learn More about Advantages and Disadvantages Of Using Computer  </p>
      <img src={owllearningimg} alt='loading...'/>
      <div className='QCF'> 
      <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
      <button  class="btn btn-success" >Start a Quiz</button>
      </div>
      </div>
    )
  
}
