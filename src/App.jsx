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
import ImageConverter from './components/ImageConverter'
import Iframe from 'react-iframe';


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
      {/* <MarioHead /> */}
      <ImageConverter />
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

      <Iframe
        src="https://www.wikipedia.org/"
        width="100%"
        height="500px"
      />

      <iframe className="wikiFrame" width="560" height="315" src="https://www.youtube.com/embed/TnGl01FkMMo" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </>
  )
}

export default App
