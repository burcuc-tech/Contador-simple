import React from "react";
import SecondsCounter from "./SecondsCounter";

function Home(props) {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4"></h1>
      <SecondsCounter seconds={props.seconds} />
     <div className="mt-4 d-flex justify-content-center gap-2">
		<button className="btn btn-danger mx-1" onClick={props.onStop}>Stop</button>
		<button className="btn btn-success mx-1" onClick={props.onResume}>Resume</button>
		<button className="btn btn-warning mx-1" onClick={props.onReset}>Reset</button>
	 </div>
      <p className="mt-4">
     Made by Burcu with <i className="fas fa-heart text-danger"></i>
      </p>
    </div>
  );
}

export default Home;
