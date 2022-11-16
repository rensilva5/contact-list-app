import React from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  return (
    <div>
    <ContactCard
      avatarUrl="https://via.placeholder.com/150"
      name= "Jason Momoa"
      email= "jasonmomoa@fakeemail.com"
      age= {28}/>
    <ContactCard
      avatarUrl="https://via.placeholder.com/150"
      name= "Paul Smith"
      email= "paulsmith@fakeemail.com"
      age= {25}/>
    <ContactCard
      avatarUrl="https://via.placeholder.com/150"
      name= "James Arthur"
      email= "jamesarthur@fakeemail.com"
      age= {41}/>
    </div>
  );
}

export default App;
