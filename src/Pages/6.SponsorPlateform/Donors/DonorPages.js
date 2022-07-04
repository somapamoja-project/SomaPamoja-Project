import React from "react";
import '../Style.css'
import onlineClass from '../../../Images/onlineClass.JPG'
import questionstudent from'../../../Images/questionstudent.JPG'
import sponsor25 from '../../../Images/sponsor25.jpg'
import { Link, useNavigate } from "react-router-dom";
import '../../2.2 Soma/style.css'

export default function DonorPagesQ() {
  const navigate = useNavigate()
  return (
    <div className='containersoma '>
        <h1>Welcome To Sponsor Platform</h1>
        <ul>
          <div className="containe1">
          <img src={questionstudent} alt='loading..' />
          <br/> <h2>Who are you ? </h2>
            </div>
            <div className='container2'>
        <li>
        <Link to='/Volunteer-Teachers' className='imageTeacherVolunteer'> <img src={onlineClass} alt='loading...'/><p className='options'> I am Volunteer Teacher </p> </Link>
        </li>
        <li>
        <Link to='/Donor-Pages-Question' className='imageSponsorVolunteer'><img src={sponsor25} alt='loading...'/> <p className='options'> I am a sponsor</p></Link>

        </li>
        </div>
       
        </ul>
    

    </div>
  )

}


