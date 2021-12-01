import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Navbar from './components/Navbar/Navbar'
import Auth from './components/auth/Auth'

//Functional Component or hook
function App() {
//Logic part of our component
  //useState accepts two values
  //State variable with initial value passed inside useState()
  //setState or set[state var name] - means of changing our state variable
  const [ count, setCount ] = useState(0)
  const [ sessionToken, setSessionToken ] = useState('undefined')
  console.log(count)

  return (
      // <>
      // <button onClick={inCount}>+</button>
      // <span>{count}</span>
      // <button onClick={decCount}>-</button>
      // </>
      <div className = "App">
        <Navbar />
        <Auth />
      </div>
  );
}

export default App;
