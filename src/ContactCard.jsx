import React, { useState } from 'react'

export default function ContactCard(props) {
    const [showAge, setShowAge] = useState(true)
  return (
      <div className="contact-card">
      <img src={props.avatarUrl} alt="profile" />      
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}></button>
        {/* {showAge ? <p>Age: 28</p> : null}  // optional */}
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  )
}
