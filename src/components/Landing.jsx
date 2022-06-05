import React from "react";

function Landing() {
  return (
    <><section className="landing">
      <div className="Landiv">
        <div className="LandText"><b>
          Ask Questions
          <br />
          Related to your video's content</b>
        </div>
        <br />
        <br />
        <button className="btn btn-light">
          <a href="/videopath"> Use a pre saved video </a>
        </button>
      </div>
    </section>
    <section>
      <div className="Questionrec">
      <p>
        Instructions: <br />
        choose your option and then click on Next button to proceed to further steps
        </p>
      </div>
    </section>
    </>
    
  );
}

export default Landing;
