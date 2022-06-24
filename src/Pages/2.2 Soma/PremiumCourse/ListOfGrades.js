import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Grade1 from '../../../Images/Grade1.png'
import Grade2 from '../../../Images/Grade2.png'
import Grade3 from '../../../Images/Grade3.png'

import Grade4 from '../../../Images/Grade41.png'


export default function ListOfCourses() {
  return (
    <div className='headerPremium'>
        <h1>Start Your basics in coding</h1>
        <div>
            <ul>
              <div className='Grades'>
        <Link to='/Grade1' className='GradeImg' id='gradeimg1'> <img src={Grade1} alt='loading...'/></Link>
        <Link to='/Grade2' className='GradeImg' id='gradeimg2'> <img src={Grade2} alt='loading...'/></Link>
        <Link to='/Grade3' className='GradeImg' id='gradeimg3'> <img src={Grade3} alt='loading...'/></Link>
        <Link to='/Grade4' className='GradeImg' id='gradeimg4'> <img src={Grade4} alt='loading...'/></Link>
        
        </div>
        <Link to='/Practice' className='btn btn-info'  id="btnSignup2"><li> Practice</li> </Link>
        </ul>
        </div>
    
    </div>
  )
}
