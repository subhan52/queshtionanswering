import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Answer() {
  const [Answertext, setAns] = useState();

  const predict = () => {
    // I am getting the queshtion from the queshtion area
    let queshtionarea = document.getElementById("queshtionarea");
    console.log(queshtionarea.value);

    // .then for promise and this works to get the data
    axios.get("http://127.0.0.1:8000/Answerof" + "/" + queshtionarea.value)
      .then((response) => {
        console.log(response);
        setAns(response.data);

      });
  }


  return (
    <>
      <div className='AnswerText'>
        <button onClick={predict} className=" predict btn btn-success btn-block col-lg-5">
          Predict Answer
        </button>
        <br />
        <div className='Answer'>
          {Answertext}
        </div>
      </div>
    </>
  )
}

export default Answer