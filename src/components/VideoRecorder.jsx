import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <section>
      <div className="Questionrec">
        <p>Status :{status}</p>
        <video className = "videoblock" src={mediaBlobUrl} controls autoPlay loop />
        <div >
        <button className = "btn btn-dark col-lg-5 rec" onClick={startRecording}>Start Recording</button>
        <button className = "btn btn-dark col-lg-5 rec" onClick={stopRecording}>Stop Recording</button>
        </div>
        <button className="btn btn-light" ><a href="/videopath"> Next </a></button>
      </div>
    </section>
  );
};

function VideoRecorder() {
  return (
    <div>
      <RecordView />
    </div>
  );
}

export default VideoRecorder;
