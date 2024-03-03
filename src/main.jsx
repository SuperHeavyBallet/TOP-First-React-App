import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const helloWorld = document.createElement("h1");
helloWorld.textContent = "Damn...";

const root = document.getElementById("root");
root.appendChild(helloWorld);

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

///
