import React from 'react'
import{Link} from 'react-router-dom'
import'../style.css'
function ListeOfCourses() {
  return (
    <div className='containerR'>
      <ol>
      <Link to='' className='ListCourses'><li >Basics of computer </li> </Link>
        <Link to='' className='ListCourses'><li >Typing and Keyboarding </li></Link>
        <Link to='' className='ListCourses'><li >Emailing </li></Link>
        <Link to='' className='ListCourses'><li >Going Online Safely</li></Link>
     
      </ol>
       </div>
  )
}

export default ListeOfCourses