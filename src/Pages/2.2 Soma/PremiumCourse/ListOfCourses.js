import React from 'react'
import { Link } from 'react-router-dom'

export default function ListOfCourses() {
  return (
    <div>
        <h1>List Of Premium Courses</h1>
        <div>
            <ul>
        <Link to='/'> <li>Basics in Coding</li></Link>
        <Link to='/Practice'><li> Practice</li> </Link>
        </ul>
        </div>
    
    </div>
  )
}
