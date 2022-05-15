import React from "react";
import axios from "axios";
// import TextOfPara from "./TextOfPara";
import SendPara from "./SendPara";
function GetvideoText() {
  const getData = () => {
    axios.get("http://localhost:8080/videotoaudio").then((transcript) => {
      console.log(transcript);
      console.log(transcript.data);
      let para = document.getElementById("transcribed-para");
      para.value = transcript.data;
    });
  };

  return (
    <section>
      <div className="getvideoText">
      <h1>You can now get the text of what was in the video and then send The Text to Server</h1>
        <button className="btn btn-light" onClick={getData}>
          get Transcribed data
        </button>
        {/* <TextOfPara /> */}
        <SendPara />
      </div>
    </section>
  );
}

export default GetvideoText;
