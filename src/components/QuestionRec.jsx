import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Answer from "./Answer";

function QuestionInitial() {
  console.log("queshtion initial");
  return "This is your queshtion";
}

function QuestionRec() {
  const [question, setQuestion] = useState(() => QuestionInitial());

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function clear() {
    setQuestion("");
  }

  return (
    <section>
      <div className="Questionrec ">
        <h1>Ask Your Question</h1>

        <input
          type="text"
          className="questionarea col-lg-10"
          value={transcript}
          id="questionarea"
          cols="20"
          rows="1"
        />
        <div className="buttonsrow ">
          <button
            id="start"
            onClick={SpeechRecognition.startListening}
            className="btn btn-primary btn-block col-lg-5 "
          >
            Start Recording
          </button>
          <button
            id="start"
            onClick={SpeechRecognition.stopListening}
            className="btn btn-primary btn-block col-lg-5 "
          >
            Stop Recording
          </button>
          <button
            id="clear"
            className="btn btn-danger btn-block col-lg-5"
            onClick={resetTranscript}
          >
            Clear Text
          </button>
          <p>Microphone: {listening ? "on" : "off"}</p>
          <div className="row">
            <br />
            <span className="col-lg-3"></span>
            <br />
          </div>
        </div>
        <Answer />
      </div>
    </section>
  );
}

export default QuestionRec;
