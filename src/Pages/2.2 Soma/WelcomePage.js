import React from 'react'
import {Link} from 'react-router-dom'
import photo1 from '../../Images/image2.jpg'
import photo2 from '../../Images/Teacher.jpg'
import {useNavigate} from 'react-router-dom'
import './style.css'


export default function WelcomePage() {
  const navigate = useNavigate()
  return (
    <div className='containersoma'>
        <h1>Welcome To Soma Pamoja</h1>
        <ul>
            <p>Who are you ?</p>
            <div className='container2'>
        <li>
        <Link to=' ' className='image1'> <img src={photo1} alt='loading...'/><p>Student</p> </Link>
        </li>
        <li>
        <Link to='' className='image2'><img src={photo2} alt='loading...'/> <p>Teacher or Guardian</p></Link>

        </li>
        </div>
       
        </ul>
    

    </div>
  )
}
