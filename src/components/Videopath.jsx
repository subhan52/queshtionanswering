import React from 'react'
import { useState } from 'react'
import axios from 'axios';
const FormData = require('form-data');

function Videopath() {

  const [file, setFile] = useState()
  const [statusOfvideo, setVideoData] = useState();
  const send = () => {
    const data = new FormData();
    data.append("file", file);
    axios.post("http://localhost:8080/videotoaudio", data)
      .then(res => {
        console.log(res);
        setVideoData("successfully got the transcribed text from the server");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <label className="form-label"><h2>Input Video file:</h2></label>
      <form action="#">
        <input name="videofile" className="form-control form-control-lg" id="file" type="file" accept='.mp4' onChange={
          event => {
            const file = event.target.files[0];
            setFile(file);
          }} />
        <br />
      </form>
      <button onClick={send} className="btn btn-dark">Submit video to transcribe</button>

      <h2>{statusOfvideo}</h2>

    </div>
  )
}

export default Videopath

// import React from 'react'

// function Videopath() {
//   return (
//     <div>
//       <label className="form-label"><h2>Input Video:</h2></label>
//       <input className="form-control form-control-lg" id="videoFilePath" type="file" accept='.mp4 , .mp3' />
//       <br />

//       <button className="btn btn-dark" type="submit">Submit video to transcribe</button>
//     </div>
//   )
// }

// export default Videopath


  // <div>
  //   Videopath
  //   <div id="uf-uploader">
  //     <form class="ufzone needsclick dz-clickable" id="upload-window">
  //       <div class="dz-message needsclick">
  //         Drop files here or click to upload files <br />(Max 10 files at once, 5GB per file)
  //       </div>
  //       <input type="file" label = "input video here"/>
  //     </form>
  //   </div>
  // </div>