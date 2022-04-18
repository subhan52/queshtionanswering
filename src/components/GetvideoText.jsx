import React from 'react'
import axios from 'axios';
function GetvideoText() {

  const getData = () => {
    axios.get("http://localhost:8080/videotoaudio")
      .then((transcript) => {
        console.log(transcript);
        console.log(transcript.data);
        let para = document.getElementById("transcribed-para");
        para.value = transcript.data;
      });
  }

  return (
    <div>
      <button className='btn btn-light' onClick={getData}>get Transcribed data</button>
    </div>
  )
}

export default GetvideoText