import React from 'react';
import ReactDOM from 'react-dom/client';
import { LiffProvider } from 'react-liff';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const liffId = "2006424481-BWa6zeaw";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LiffProvider liffId={liffId}>
      <App />
    </LiffProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
