import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



function QueshtionInitial( )  {
  console.log("queshtion initial");
  return "This is your queshtion";
}

function QueshtionRecord() {

  const [queshtion, setQueshtion] = useState(() =>  QueshtionInitial() );

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  function clear() {
    setQueshtion("");
  }

  return (
    <div>
      <h1>Queshtion</h1>
      <input type='text' className="queshtionarea" value={transcript} id="queshtionarea" cols="20" rows="1" />
      <div className="row buttonsrow ">
      <button id="start" onClick={SpeechRecognition.startListening} className="btn btn-primary btn-block col-lg-4 ">
        Start Recording
      </button>
      <button id="start" onClick={SpeechRecognition.stopListening} className="btn btn-primary btn-block col-lg-4 ">
        Stop Recording
      </button>
      <button id="clear" className="btn btn-danger btn-block col-lg-4" onClick={resetTranscript}>
        Clear Text
      </button>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div className="row">
        <br />
      <span className='col-lg-3'></span>
      <br />
      </div>

      </div>
    </div>
  )
}

export default QueshtionRecord