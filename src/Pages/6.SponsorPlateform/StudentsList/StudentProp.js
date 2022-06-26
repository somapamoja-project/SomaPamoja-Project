import React from 'react'

export default function StudentProp({Fullname,age,reason,interest}) {
  return (
    <div>
        <h1>{Fullname}</h1>
        <p>{age}</p>
        <h2>{reason}</h2>
        <h5>{interest}</h5>

        
    </div>
  )
}
