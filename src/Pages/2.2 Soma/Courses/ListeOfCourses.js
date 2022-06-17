import React from 'react'
import{Link} from 'react-router-dom'
import'../style.css'
import imageD from"../../../Images/owlteacher.png"


function ListeOfCourses() {
  return (
    <div className='containerC'>
      
      <ol>
      <img src={imageD} alt='loading...' />
      <div className='allCourses'>
      <Link to='/BasicsOfComputer' className='ListCourses'><li >Basics of computer </li> </Link>
        <Link to='/Typing-KeyBoard' className='ListCourses'><li >Typing and Keyboarding </li></Link>
        <Link to='' className='ListCourses'><li >Emailing </li></Link>
        <Link to='' className='ListCourses'><li >Going Online Safely</li></Link>
        </div>
      </ol>
    
       </div>
  )
}

export default ListeOfCourses