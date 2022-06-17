import React from 'react'
import owllearningimg from '../../../../Images/owlLearning.png'
import {useNavigate} from 'react-router-dom'


function BasicComputerMaintenance() {

    const LinkVideo="https://www.youtube.com/embed/9aFVjvCJcbk?theme=dark&color=black"

  return (
<div className='containerFC'> 
   <h1> BASICS OF COMPUTER MAINTENANCE</h1>
   <p>Watch this Video to Learn More about Basics Of Computer Maintenance </p>
    <img src={owllearningimg} alt='loading...'/>
    <div className='QCF'> 
    <iframe width="760" height="415" src={LinkVideo} title="YouTube video player" frameborder="0" ></iframe>
    <button  class="btn btn-success"  >Start a Quiz</button>
    </div>
    </div>)
 
}

export default BasicComputerMaintenance