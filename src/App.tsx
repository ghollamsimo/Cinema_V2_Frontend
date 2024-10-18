import './App.css'
import Register from "./auth/Register.tsx";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Login from "./auth/Login.tsx";

function App() {

  return (
    <>
        <Register/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </>
  )
}

export default App
