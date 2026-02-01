import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

// components
import Home from './components/Home';

let seconds = 20;
let isRunning = true;
let alertTime = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(
    <React.StrictMode>
      <Home seconds={seconds}
      onStop = {() => (isRunning = false)}
      onResume = {()=> (isRunning = true)}
      onReset = {()=> {
        seconds = 20;
        isRunning = false;
      }}
      />
    </React.StrictMode>
  );
}

setInterval(() => {
 if (isRunning && seconds > 0) {
  seconds --;
  if (seconds === alertTime) {
    alert ("Se acabó el tiempo")
  }
 }
  renderApp();
}, 1000);

renderApp();
