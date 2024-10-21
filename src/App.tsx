import './App.css'
import {Route, Routes} from "react-router-dom";
import React from "react";
import Login from "./auth/Login.tsx";
import HomePage from "./pages/HomePage.tsx";
import FilmPage from "./pages/FilmPage.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path={'films/:filmId'} element={<FilmPage/>}/>
        </Routes>

    </>
  )
}

export default App
