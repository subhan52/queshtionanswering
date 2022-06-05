import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";

function Answer() {
  const [Answertext, setAns] = useState();

  const { speak } = useSpeechSynthesis();
  let sp = () => speak({ text: Answertext });

  const predict = async () => {
    // I am getting the queshtion from the queshtion area
    let questionarea = document.getElementById("questionarea");
    console.log(questionarea.value);

    // .then for promise and this works to get the data
     axios
      .get("http://127.0.0.1:8000/Answerof/" + questionarea.value)
      .then((response) => {
        console.log(response);
        setAns(response.data);
      });
  };

  return (
    <>
      <div className="AnswerText">
        <button
          onClick={predict}
          className=" predict btn btn-success btn-block col-lg-5"
        >
          Predict Answer
        </button>
        <br />
        <div className="Answer">
          <p>{Answertext}</p>
        </div>
        {/* <button onClick={() => speak({ text: Answertext })}>Speech</button> */}
         <button onClick={sp} className = "predict btn btn-success btn-block col-lg-5"> Speak Answer </button> 
      </div>
    </>
  );
}

export default Answer;
