import React from 'react'
import '../Style.css'


export default React.memo( function PagePastingMeeting() {
    function SubmitSchedule(){
        const MeetingTopic=document.getElementById('MeetingTopic')
        const scheduleMeeting=document.getElementById('scheduleMeeting')
        const scheduleDate= document.getElementById('scheduleDate')
        const scheduleTime=document.getElementById('scheduleTime')



    }
  return (
    <div className='container'>
        <div className='TitleTeacherVSchedule'>
            <h3>Schedule for the meeting </h3>

            <input id='MeetingTopic' placeholder='Topic'/><br/>
            <input id='scheduleMeeting' placeholder='Link for the meeting'/><br/>
            <input type='date' id='scheduleDate' placeholder='Date for the meeting'/><br/>
            <input type='time' id='scheduleTime' placeholder='Time of the meeting'/> <br/>
            <button className='btn btn-primary' onClick={()=>{return }} >Submit</button>
        
       </div> 

    </div>
  )
})
