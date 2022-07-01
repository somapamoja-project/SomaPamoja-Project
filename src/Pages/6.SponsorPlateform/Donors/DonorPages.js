import React from "react";
import '../Style.css'
import onlineClass from '../../../Images/onlineClass.JPG'
import questionstudent from'../../../Images/questionstudent.JPG'
import { Link, useNavigate } from "react-router-dom";

export default function DonorPagesQ() {
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
        <Link to='/List-Of-Sponsored-Students' className='image1'> <img src={onlineClass} alt='loading...'/><p className='options'> I am student Who needed to be sponsored </p> </Link>
        </li>
        <li>
        <Link to='/Donor-Pages-Question' className='image2'><img src={''} alt='loading...'/> <p className='options'> I am a sponsor</p></Link>

        </li>
        </div>
       
        </ul>
    

    </div>
  )

}


