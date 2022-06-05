import React from "react";
import axios from "axios";

// var axios = require("axios");

function SendPara() {
  const sendPara = () => {
    let para = document.getElementById("transcribed-para");
    // console.log(para.value);

    var data = JSON.stringify({
      paragraph: para.value,
    });

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/init_para/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="textofpara">
      <div className="form-group">
        <textarea
          className="form-control tarea"
          id="transcribed-para"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button
        onClick={sendPara}
        className=" predict btn btn-success btn-block col-lg-5"
      >
        Send Answer contained text
      </button>
      <br />
      <button className="btn btn-light">
        <a href="/queshtionrec">Next</a>
      </button>
    </div>
  );
}

export default SendPara;
