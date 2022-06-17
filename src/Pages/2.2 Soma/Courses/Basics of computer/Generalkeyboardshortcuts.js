import React from 'react'
import owllearningimg from '../../../../Images/owlLearning.png'

function Generalkeyboardshortcuts() {
    const LinkVideo="https://www.youtube.com/embed/y7m7zJgtwcI?theme=dark&color=black"
    return (
  <div className='containerFC'> 
     <h1> GENERAL KEYBOARD SHORTCUTS </h1>
     <p>Watch this Video to Learn More about General keyboard shortcuts  </p>
      <img src={owllearningimg} alt='loading...'/>
      <div className='QCF'> 
      <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
      <button  class="btn btn-success" >Start a Quiz</button>
      </div>
      </div>
    )
  
}

export default Generalkeyboardshortcuts