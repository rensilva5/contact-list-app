import React, { useState } from 'react'

export default function ContactCard() {
    const [showAge, setShowAge] = useState(true)
  return (
      <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile" />      
      <div className="user-details">
        <p>Name: Jason Momoa</p>
        <p>Email: jason.momoa@fakeemail.com</p>
        <button onClick={() => setShowAge(!showAge)}></button>
        {showAge && <p>Age: 28</p>}
      </div>
    </div>
  )
}
