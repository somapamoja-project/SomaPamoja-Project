import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuestionOwl from '../../../Images/owliequestion.png'



export default function Q1ComputerFundamentals() {
  const [answers,setAnswers]=useState(0)
  const Reponse=()=>{
    const displayAnswer=document.getElementById('answer10')
    const FirstAnswer=document.getElementById('FirstAnswer')
    const SecondAnswer=document.getElementById('SecondAnswer')
    const ThirdAnswer=document.getElementById('ThirdAnswer')

    displayAnswer.innerText=answers
    FirstAnswer.innerText='2.Charles Babage'
    SecondAnswer.innerText='3.Babbage Difference Engine'
    ThirdAnswer.innerText='1.Father of computer'


   
    
    
 console.log(displayAnswer)
  }


  useEffect( ()=>{
  
    

  })

  function FirstAnswer(){
    const answer= Number(document.getElementById('answer').value)
    if( answer===2){
      setAnswers(answers+1) 
    }

  }
  function SecondAnswer(){
    const answer1= Number(document.getElementById('answer1').value)
    if (answer1===3) {
      setAnswers(answers+1) 
      
      
    }

  }
  function ThirdAnswer(){
    const answer1= Number(document.getElementById('answer2').value)
    if (answer1===1) {
      setAnswers(answers+1) 
      
      
    }

  }
  return (
    
    <div className='container'>
   <div >
    <img className='QuestionOwl' src={QuestionOwl} alt='loading...' />
    <div className='AllQuestions1'>
      <h1>20 Questions in Computer Fundamentals </h1>
      <ol class="list-group">
  <h1>A.Who is the Father of computer</h1>
  <li class="list-group-item"> 1.Styve Job</li>
  <li class="list-group-item">2.Charles Babage</li>
  <li class="list-group-item">3.Bill Gate</li>
  
</ol>
<input placeholder='  answer' id='answer' onChange={FirstAnswer}  />
      <div id='FirstAnswer'></div>
      

   
   <div>
   <ol class="list-group">
        <h1>B.What is the first computer</h1>
        <li class="list-group-item">
        1.Windows1992
        </li>
        <li class="list-group-item">
          2.Mashitok1985
        </li>
        <li class="list-group-item">
          3.Babbage Difference Engine
        </li>

      </ol>
      <input placeholder='  answer' id='answer1' onChange={SecondAnswer}  />
      <div id='SecondAnswer'>

      </div>
      </div>

      

   
   <div>
   <ol class="list-group">
  <h1>C.Who is the Charles Babage</h1>
         <li class="list-group-item">
          1.Father of computer
        </li>
        <li class="list-group-item">
          2.builder of microsoft
        </li>
        <li class="list-group-item">
          3.Creater of Mishitok
        </li>

      </ol>
      <input placeholder='  answer' id='answer2' onChange={ThirdAnswer} />
      <div id='ThirdAnswer'>

      </div>
      <button className=' btn btn-danger' onClick={Reponse}>Result</button>
      <h1 id='answer10'></h1>

   </div>
   </div>
   </div>
      </div>
    
      
  )
}
