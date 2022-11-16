import React, { useState } from 'react'

export default function ContactCard(props) {
    const [showAge, setShowAge] = useState(true)
    // const [address, setAddress] = useState(true)
  return (
      <div className="contact-card">
      <img src={props.avatarUrl} alt="profile" />      
      <div className="user-details">
        <p>First Name: {props.name}</p>
        {/* <p>Last Name: {props.last}</p> */}
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {showAge && <p>Age: {props.age}</p>}
        {/* <button className="button-b" onClick={() => setAddress(!address)}>Show Address</button>
        {address ? <p>Address: {props.address}</p> : null} */}
      </div>
    </div>
  )
}