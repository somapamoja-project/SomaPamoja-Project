import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth, colRef, colVolunteer } from "../../firebase/Firebase-config";
import { useState } from "react";
import usePng from "../../Images/usePng.png";
import "./Style.css";
import NavBar from "../1.Navbar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import sponsorImg from "../../Images/spocourses1.JPG";
import payableImg from "../../Images/payblecourses1.JPG";
import freeCourseImg from "../../Images/freecourses1.JPG";
import { getDocs } from "firebase/firestore";




export default React.memo( function  User() {
  const[data,setData]=useState()
  const [List,setList]=useState([])
  

async function VolunteerTeacher(){
 try{ await getDocs(colVolunteer)
             .then((allData)=>{
              console.log(allData)

             })


}
 catch(e){console.log(e.message)}

}
const oneData=[]
   
  
   
   async function VolunteerTeacher(){
    
   
  try{  await getDocs(colVolunteer).then((allDocs) => {
    var studentsList = []
  
  allDocs.docs.forEach((doc) => {
    studentsList.push( {...doc.data() });
    
   return setList(studentsList)
  })
  
  
  
  })
  .catch((e)=>{
  console.log(e.message)
  })}
  catch(err){
console.log(err.message)
  }
}
console.log(List)
  

  useEffect(() => {
    VolunteerTeacher()
    try {

      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setData(currentUser)
        } else {

          console.log("no user");
        }
      });
    } catch (err) {
      console.log(err.code);
    }
  }, []);



 
  return (
    <div className="UseName" id='imageIcon'>
      <Profile imgUrl={data?.photoURL} NameLink={data?.displayName} EmailLink={data?.email} />
        <CodeSponsorpayement Code={''}/>
        <ScheduleMeeting List={List}  />
        <OfferPrograms linkto1="/Payment" linkto2="/Welcome-To-Sponsor-Platform" />
        
    
    </div>
  );
})
export function OfferPrograms({ linkto1, linkto2 }) {
  return (
    <div className=" container" id="OurPrograms">
      <h2 id="programs">Our Programs </h2>
      <div className="OfferPrograms">
        <div>
          <Link to="/FreeCourses" className="img">
            <img src={freeCourseImg} alt="loadingg..." />
          </Link>
        </div>
        <div>
          <Link to={linkto1} className="img">
            {" "}
            <img src={payableImg} alt="loadingg..." />
          </Link>
        </div>
        <div>
          <Link to={linkto2} className="img">
            <img src={sponsorImg} alt="loadingg..." />
          </Link>
        </div>
      </div>
    </div>
  );
}
const Profile=({imgUrl,NameLink,EmailLink})=>{
  return(
    <div className="container" id="profileDash">
      <div className="profileDash">
        <img type='icon' src={imgUrl} alt='log in with your Gmail account'/>
        <h5>{NameLink}</h5>
        <h6>{EmailLink}</h6>
      </div>

    </div>
  )
}
const CodeSponsorpayement=({Code})=>{
  const navigate01=useNavigate()
  return(
    <div className="container" id="codesponsor">
      <h3>Code From a sponsor</h3>
      <p type='password'>{Code}</p>
      <p>You can apply to sponsor program  for you to be sponsored by our donors </p>
      <button className="btn btn-danger" onClick={()=>{ return navigate01('/List-Of-Sponsored-Students')}}>Apply Now</button>
    </div>
  )
}
const ScheduleMeeting=({List})=>{
  
return( 
<div className="MeetingVolunteer" >
  <h3> Free Topics provided by Volunteer Teacher</h3>
  <tr><td>FullNames</td><td>Topic</td><td>Date</td><td>Time</td><th>Link</th></tr>
  {
 List.map((e)=>{return( <tr><td>{e.FullNames}</td><td>{e.MeetingTopic}</td><td >{e.ScheduleDate}</td> <td>{e.ScheduleTime}</td> <td ><a style={{marginRight:'2%'}} href={e.ScheduleMeeting}>Link</a></td></tr>)})
  }


</div>)
}
