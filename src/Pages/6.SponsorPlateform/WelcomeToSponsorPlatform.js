import React from 'react'
import {Link} from 'react-router-dom'
import photo1 from '../../Images/sponsorChildren.png'
import photo2 from '../../Images/sponsor5.jpg'
import {useNavigate} from 'react-router-dom'
import questionstudent from'../../Images/questionstudent.JPG'

import './Style.css'
import '../2.2 Soma/style.css'


export default function WelcomePage() {
  const navigate = useNavigate()
  return (
    <div className='containersoma'>
        <h1>Welcome To Sponsor Platform</h1>
        <ul>
          <div className="containe1">
          <img src={questionstudent} alt='loading..' />
          <br/> <h2>Who are you ? </h2>
            </div>
            <div className='container2'>
        <li>
        <Link to='/List-Of-Sponsored-Students' className='image1'> <img src={photo1} alt='loading...'/><p className='options'> I am student Who needed to be sponsored </p> </Link>
        </li>
        <li>
        <Link to='/SigningUp' className='image2'><img src={photo2} alt='loading...'/> <p className='options'> I am a sponsor</p></Link>

        </li>
        </div>
       
        </ul>
    

    </div>
  )
}
