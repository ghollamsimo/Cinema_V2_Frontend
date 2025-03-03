import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import {store} from './redux/Store.ts'
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {ToastContainer} from "react-toastify";
createRoot(document.getElementById('root')!).render(
    <>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
<ToastContainer />
    </>
)
