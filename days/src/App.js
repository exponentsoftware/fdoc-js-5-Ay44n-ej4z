import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [country, setCountry] =useState([]);

  useEffect(()=> {
    fetch("https://restcountries.com/v3/all")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCountry(data)})
  })
  return (
    <div className="App">
        <ul>
          {country.map((list, index)=> <li key = {index}>
            <div className = "App">
              <li> {list.name.common}</li>
             </div>
             <div className = "App">
              <li>{list.area}</li>
              </div> 
             
          </li>)}
        </ul>
    </div>
  );
}

export default App;
