import React from 'react'
import Navbar from './components/Navbar.jsx'
import Videopath from './components/Videopath.jsx'
import TextOfPara from './components/TextOfPara.jsx'
import QueshtionRecord from './components/QueshtionRecord.jsx'
import Answer from './components/Answer.jsx'
import "./App.css"
import GetvideoText from './components/GetvideoText.jsx'
function App() {
  return (
    <div className='App'>   
      <Navbar />
      <Videopath />
      <GetvideoText />
      <TextOfPara />
      <QueshtionRecord />
      <Answer />
    </div>
  )
}

export default App