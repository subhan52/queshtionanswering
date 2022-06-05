import React from "react";
import { Route, Routes } from "react-router-dom";
import Videopath from './components/Videopath.jsx'
import GetvideoText from './components/GetvideoText.jsx'
import Navbar from './components/Navbar.jsx'
import "./App.css"
import QueshtionRec from "./components/QuestionRec.jsx";
import Answer from "./components/Answer.jsx";
import VideoRecorder from "./components/VideoRecorder.jsx";
import Landing from "./components/Landing.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/videopath" element={<Videopath />}></Route>
        {/* <Route exact path="/videoRecorder" element={<VideoRecorder />}></Route> */}
        {/* <Route exact path="/" element={<Test />}></Route> */}
        <Route path="/videotoaudio" element={<GetvideoText/>}></Route>
        <Route path="/queshtionrec" element={<QueshtionRec/>}></Route>
        <Route path="/answer" element={<Answer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
