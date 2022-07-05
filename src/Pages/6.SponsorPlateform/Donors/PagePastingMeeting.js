import React from 'react'
import '../Style.css'
import {addDoc} from 'firebase/firestore'
import {colVolunteer} from '../../../firebase/Firebase-config'
import { useNavigate } from 'react-router-dom'


export default React.memo( function PagePastingMeeting() {
  const navigation02=useNavigate()
   async function SubmitSchedule(){
        const FullNames=document.getElementById('FullNames')
        const MeetingTopic=document.getElementById('MeetingTopic')
        const ScheduleMeeting=document.getElementById('scheduleMeeting')
        const ScheduleDate= document.getElementById('scheduleDate')
        const ScheduleTime=document.getElementById('scheduleTime')
       try{ await addDoc(colVolunteer,{
        FullNames:FullNames.value,
        MeetingTopic:MeetingTopic.value,
        ScheduleDate:ScheduleDate.value,
        ScheduleMeeting:ScheduleMeeting.value,
        ScheduleTime:ScheduleTime.value




       })
        .then(
       () => {
         document.getElementById('form01').reset()
          
          console.log("success")
          navigation02('/user')
        
        }
        
        )


        .catch((err)=>{ console.log(err.message)})
        window.alert('error')
      }
       catch(err){
        console.log(err.message)
        window.alert('error')

       }
        
       


    }
  return (
    <div className='container'>
        <div className='TitleTeacherVSchedule'>
            <h3>Schedule for the meeting </h3>
            <form  id='form01'>
            <input id='FullNames' placeholder='FullNames'/><br/>
            <input id='MeetingTopic' placeholder='Topic'/><br/>
            <input id='scheduleMeeting' placeholder='Link for the meeting'/><br/>
            <input type='date' id='scheduleDate' placeholder='Date for the meeting'/><br/>
            <input type='time' id='scheduleTime' placeholder='Time of the meeting'/> <br/>
            <button type='button' onClick={SubmitSchedule} className='btn btn-primary' value='button' >Submit</button>
            </form>
       </div> 

    </div>
  )
})
