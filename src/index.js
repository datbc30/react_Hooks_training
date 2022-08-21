import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseStateDemo from './pages/HookDemo/useStateDemo/UseStateDemo';
import UseEffectDemo from './pages/useEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HookDemo/useStateDemo/UseCallBlackDemo/UseCallBackDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />}>
        <Route path="usestate" element={<UseStateDemo />}></Route>
        <Route path="useeffect" element={<UseEffectDemo />}></Route>
        <Route path="callblack" element={<UseCallBackDemo />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
