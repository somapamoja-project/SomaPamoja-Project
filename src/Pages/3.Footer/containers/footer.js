import React from 'react'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import Icon from '../components/icons'
import './style.css'
import OfficalLogo from '../../../Images/My project (9).png'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase/Firebase-config'



 export default function FooterContainer() {
    const logeOut = () => {
        signOut(auth);
        
      }
    return (
       
        <Footer  >
             
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Link className='imgLogo' to='/about'><img src={OfficalLogo} alt='loading'/></Link>
                   
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">coding</Footer.Link>
                    <Footer.Link href="#">computer Basics</Footer.Link>
                    <Footer.Link href="#">games</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">kakuma refugee camp</Footer.Link>
                    <Footer.Link href="#">kalobeyei settlement</Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <button onClick={logeOut}> LogOut</button>

                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper> 
        
           
        </Footer>
        
    )
}