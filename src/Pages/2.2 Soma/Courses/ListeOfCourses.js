import React from 'react'
import{Link} from 'react-router-dom'
import'../style.css'
import imageD from"../../../Images/owlteacher.png"
import whatComputer from'../../../Images/FreeCourses/whatComputer.gif'
import Typingmaster from '../../../Images/FreeCourses/Typingmaster.gif'
import Gmail from '../../../Images/FreeCourses/Gmail.gif'
import safesecurity from '../../../Images/FreeCourses/safesecurity.gif'


function ListeOfCourses() {
  return (
    <div className='containerC'>
      <h1>Free Courses</h1>
      
      <ol>
      <img src={imageD} alt='loading...' />
      <div className='allCourses'>
      <Link to='/BasicsOfComputer' className='ListCourses'><li >Basics of computer </li>
      <div className='imgList'><img src={whatComputer} alt='loading...' />
      
      
      </div>
       </Link>
        <Link to='/Typing-KeyBoard' className='ListCourses'><li >Typing and Keyboarding </li>
        <div className='imgList'><img src={Typingmaster} alt='loading...' />
      
      
      </div>
        </Link>
        <Link to='/CreateEmailing' className='ListCourses'><li >Emailing </li>
        <div className='imgList'><img src={Gmail} alt='loading...' />
      
      
      </div></Link>
        <Link to='/GoingOnlineSafely' className='ListCourses'><li >Going Online Safely</li>
        <div className='imgList'><img src={safesecurity} alt='loading...' />
      
      
      </div>
        </Link>
        </div>
      </ol>
    
       </div>
  )
}

export default ListeOfCourses