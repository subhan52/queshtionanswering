import React from 'react'
import axios from 'axios';
function TextOfPara() {
  const sendPara = () =>{
    let para = document.getElementById("transcribed-para");
    console.log(para.value);
    axios.post("http://127.0.0.1:8000/init_para/"+ para.value)
    .then((response) => {
      console.log(response);

    });
  }


  return (
    <div className='textofpara'>
      <div className="form-group">
        <textarea className="form-control" id="transcribed-para" cols="30" rows="10"></textarea>
      </div>
      <button  onClick={sendPara} className=" predict btn btn-success btn-block col-lg-5">
        Send Answer contained text
      </button>
      <br />
    </div>
  )
}

export default TextOfPara