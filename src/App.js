import React, { useEffect, useState } from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {

const [results, setResults] = useState([])
useEffect(() => {
  fetch("https://randomuser.me/api/?results=10")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setResults(data.results)
  })
}, [])

  return (
    <div>
    {results.map((result, index) => {
        return(
          <ContactCard key={index}
            avatarUrl= {result.picture.large}
            name= {result.name.first}
            last={result.name.last}
            email= {result.email}
            age= {result.dob.age}
            // address= {result.location.street.number}
          />
        )
      })}
    </div>
  );
}

export default App;