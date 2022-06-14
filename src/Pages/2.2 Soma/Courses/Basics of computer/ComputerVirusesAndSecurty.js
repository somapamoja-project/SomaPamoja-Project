import React from 'react'
import owllearningimg from '../../../../Images/owlLearning.png'
export default function ComputerVirusesAndSecurty() {
    const LinkVideo="https://www.youtube.com/embed/Ip-u5NZJiwY?theme=dark&color=black"
  return (
<div className='containerFC'> 
   <h1> COMPUTER VIRUSES AND SECURITY</h1>
   <p>Watch this Video to Learn More about History of Computer and Generations </p>
    <img src={owllearningimg} alt='loading...'/>
    <div className='QCF'> 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
    <button  class="btn btn-success" >Start a Quiz</button>
    </div>
    </div>)
  
}
