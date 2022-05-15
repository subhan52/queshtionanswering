import React from 'react'
import Navbar from './components/Navbar.jsx'
import Videopath from './components/Videopath.jsx'
import TextOfPara from './components/TextOfPara.jsx'
import QueshtionRecord from './components/QueshtionRecord.jsx'
import Answer from './components/Answer.jsx'
import GetvideoText from './components/GetvideoText.jsx'
import "./App.css"
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