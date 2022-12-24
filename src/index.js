import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  HashRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider  store={store}>

      <ToastContainer
theme="light"
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
/>
{/* Same as */}


        <App />
      </Provider>
    </آ>
  </React.StrictMode>
);
