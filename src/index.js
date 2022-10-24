import React, { Suspense } from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import FallbackLoading from './FallbackLoading';
import Loading from './components/Loading';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import "./App.css"
import "./utils/i18next";
import "./style/css/_import.css"
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Router>
        <Suspense fallback={FallbackLoading}>
          <StyledEngineProvider injectFirst>

            <App />

          </StyledEngineProvider>
        </Suspense>
      </Router>
    </React.StrictMode>
  </HelmetProvider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
