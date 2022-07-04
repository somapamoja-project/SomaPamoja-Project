import React from 'react'
import { Wave } from 'react-animated-text'
import { Link } from 'react-router-dom'

export default function VolunteerTeachers() {
  return (
    <div className='container'>
        <div className='TitleTeacherV'>
            <h3>Volunteer Teachers Platform </h3>
        
        <div className="header5"> 
        <Wave
         
          text="We welcome you and thank you so much !"
          effect="fadeOut"
          effectChange={1}
        />

        </div>
        <p>On this platform , you will create a link from Microsoft Team, to schedule a meeting with all our Interest students. 
            To create a link,<a  href='https://teams.live.com/_#/apps/957ed0e3-e5ca-4c82-9676-fd037185c4d8/sections/459c9663-c6be-4181-8576-6de8ef0e9368' target='_blank'>Click here!</a> 
            you will copy and  paste the meeting link on <Link to='/Meeting-schedule' > Meeting Schedule page</Link>. </p>
    </div>
    </div>
  )
}
