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
    const ForthAnswer=document.getElementById('ForthAnswer')
    const FifthAnswer=document.getElementById('FifthAnswer')
    const SixthAnswer=document.getElementById('SixthAnswer')
    const SeventhAnswer=document.getElementById('SeventhAnswer')
    const EightAnswer=document.getElementById('EightAnswer')
    const NineAnswer=document.getElementById('NineAnswer')
    const TenAnswer=document.getElementById('NineAnswer')
    



    displayAnswer.innerHTML=answers
    FirstAnswer.innerText='2.Is an electronic device which helps to solve a problem when In used'
    SecondAnswer.innerText='3.Laptop'
    ThirdAnswer.innerText=' 1.speaker'
    ForthAnswer.innerText='2.Charless babbage'
    FifthAnswer.innerText='2. tangible part of the computer'
    SixthAnswer.innerText='3.printer'
    SeventhAnswer.innerText='1. microphone'
    EightAnswer.innerText='1. scanner '
    NineAnswer.innertext='3.lower level language'
    TenAnswer.innertext='2.walking'
  


 console.log(displayAnswer)
  }


  useEffect( ()=>{
  
  })

  function FirstAnswer(){
    const answer= Number(document.getElementById('answer').value)
    if( answer===2){
      setAnswers(answers+10) 
    }

  }
  function SecondAnswer(){
    const answer1= Number(document.getElementById('answer1').value)
    if (answer1===3) {
      setAnswers(answers+10) 
      
      
    }

  }
  function ThirdAnswer(){
    const answer1= Number(document.getElementById('answer2').value)
    if (answer1===1) {
      setAnswers(answers+10) 
      
      
    }

  }
  function ForthAnswer(){
    const answer1= Number(document.getElementById('answer3').value)
    if (answer1===2) {
      setAnswers(answers+10) 
      
      
    }
  }

  function FifthAnswer(){
    const answer1= Number(document.getElementById('answer4').value)
    if (answer1===2) {
      setAnswers(answers+10) 
    }
  }

  function SixthAnswer(){
    const answer= Number(document.getElementById('answer5').value)
    if( answer===3){
      setAnswers(answers+10) 
    }
  }

  function SeventhAnswer(){
    const answer= Number(document.getElementById('answer6').value)
    if( answer===1){
      setAnswers(answers+10) 
    }
  }

  function EightAnswer(){
    const answer= Number(document.getElementById('answer7').value)
    if( answer===1){
      setAnswers(answers+10) 
    }
  }

  function NineAnswer(){
    const answer= Number(document.getElementById('answer8').value)
    if( answer===3){
      setAnswers(answers+10) 
    }
  }

  function TenAnswer(){
    const answer= Number(document.getElementById('answer9').value)
    if( answer===2){
      setAnswers(answers+10) 
    }
  }
  return (
    
    <div className='container'>
   <div >
    <img className='QuestionOwl' src={QuestionOwl} alt='loading...' />
    <div className='AllQuestions1'>
      <h1 className='headerQ'>10 Questions in Computer Fundamentals </h1>
      <ol class="list-group">
  <h1>A.	What is computer?</h1>
  <li class="list-group-item"> 1.	Collection of data</li>
  <li class="list-group-item">2.Is an electronic device which helps to solve a problem when In used</li>
  <li class="list-group-item">3.	Is a storage of information</li>
  
</ol>
<input placeholder='  answer' id='answer' onChange={FirstAnswer}  />
      <div id='FirstAnswer'></div>
      

   
   <div>
   <ol class="list-group">
        <h1>B.	Which one of the following is not parts of computer?</h1>
        <li class="list-group-item">
        1.	Monitor
        </li>
        <li class="list-group-item">
          2.	Keyboard
        </li>
        <li class="list-group-item">
          3.Laptop
        </li>

      </ol>
      <input placeholder='  answer' id='answer1' onChange={SecondAnswer}  />
      <div id='SecondAnswer'>

      </div>
      </div>

      

   
   <div>
   <ol class="list-group">
  <h1>C.	Which one of the following is not types of computer?</h1>
         <li class="list-group-item">
          1.speaker
        </li>
        <li class="list-group-item">
          2.Desktop
        </li>
        <li class="list-group-item">
          3. Smartphone
        </li>

      </ol>
      <input placeholder='  answer' id='answer2' onChange={ThirdAnswer} />
      <div id='ThirdAnswer'>
        </div>
        </div>
        <div>
        <div>

      
      <ol class="list-group">
  <h1>D.	Who is the father of computer</h1>
  <li class="list-group-item"> 1.Bilgate</li>
  <li class="list-group-item">2.Charless babbage</li>
  <li class="list-group-item">3.Nelson  mandela</li>
  
</ol>
<input placeholder='  answer' id='answer3' onChange={ForthAnswer}  />
      <div id='ForthAnswer'></div>

      <ol class="list-group">
  <h1>E.what  is hardware?</h1>
  <li class="list-group-item"> 1.processing data</li>
  <li class="list-group-item">2.tangible part of the computer</li>
  <li class="list-group-item">3.central processing unit of the computer</li>
  
</ol>
<input placeholder='  answer' id='answer4' onChange={FifthAnswer}  />
      <div id='FifthAnswer'></div>

      <ol class="list-group">
  <h1>F. which one of the following is not part of the software?</h1>
  <li class="list-group-item"> 1. Android</li>
  <li class="list-group-item">2.power point</li>
  <li class="list-group-item">3.printer</li>
  
</ol>
<input placeholder='  answer' id='answer5' onChange={SixthAnswer}  />
      <div id='SixthAnswer'></div>

      <ol class="list-group">
  <h1>G. which one of the following is an example of an input device?</h1>
  <li class="list-group-item"> 1. microphone </li>
  <li class="list-group-item">2.Headphone</li>
  <li class="list-group-item">3.speaker</li>
  
</ol>
<input placeholder='  answer' id='answer6' onChange={SeventhAnswer}  />
      <div id='SeventhAnswer'></div>

      <ol class="list-group">
  <h1>H. which one of the following is not an example of an output device?</h1>
  <li class="list-group-item"> 1. scanner </li>
  <li class="list-group-item">2.projector</li>
  <li class="list-group-item">3.speaker</li>
  
</ol>
<input placeholder='  answer' id='answer7' onChange={EightAnswer}  />
      <div id='EightAnswer'></div>

      <ol class="list-group">
  <h1>I. name a computer language?</h1>
  <li class="list-group-item"> 1.English </li>
  <li class="list-group-item">2.Spanish</li>
  <li class="list-group-item">3.lower level language</li>
  
</ol>
<input placeholder='  answer' id='answer8' onChange={NineAnswer}  />
      <div id='NineAnswer'></div>

      <ol class="list-group">
  <h1>F.which one of the following is not use of computer?</h1>
  <li class="list-group-item"> 1. study </li>
  <li class="list-group-item">2.walking</li>
  <li class="list-group-item">3.watch movies</li>
  
</ol>
<input placeholder='  answer' id='answer9' onChange={TenAnswer}  />
      <div id='TenAnswer'></div>
      </div>
      <button className=' btn btn-danger' onClick={Reponse}>Result</button>
      <button className='btn btn-warning'>Store Your Points</button>
      <h1 id='answer10'></h1><h1>/100</h1>

      

   </div>
   
   </div>
   
   </div>
      </div>
    
      
  )
}
