import "./Style.css"
import React from 'react'
import {Header,Explanation} from './HomeComponents'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div>
      
        <Header/>
        <Explanation/>
       
    </div>
  )
}
