import { useState } from 'react'

import './App.css'
import DateTime from './components/DateTime'
import IP from './components/IP'
import MarioHead from './components/MarioHead'
import ReactViteLogo from './components/ReactViteLogo'
import Location from './components/Location'
import ToDo from './components/ToDo'
import BitcoinPrice from './components/BitcoinPrice'
import Stopwatch from './components/StopWatch'
import Joke from './components/joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <div className="card"> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count} */}
        {/* </button> */}
      {/* </div> */}
      {/* <p>Hello World</p> */}
      <ReactViteLogo />
      <MarioHead />
      <Location />
      <DateTime />
      <IP />
      <BitcoinPrice />
      <p>------------------------</p>
      <Joke />
      <p>------------------------</p>
      <Stopwatch />
      <p>------------------------</p>
      <ToDo />
      <p>------------------------</p>
    </>
  )
}

export default App
