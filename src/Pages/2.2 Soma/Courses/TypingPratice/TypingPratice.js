import React from 'react'
import './style.css'

export default function TypingPratice() {
  return (
    <div className='Typing'>
        <a class="btn btn-primary" id='pratice' href="https://www.doorwayonline.org.uk/activities/text-type/" target="iframe_a">Start Your Practice </a>
        <iframe href="https://www.doorwayonline.org.uk/activities/text-type3/text-type.html" name="iframe_a" height="600px" width="100%" title="Iframe Example"/>
    </div>
  )
}