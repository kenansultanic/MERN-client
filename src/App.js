/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router"
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
const App = () => {
    
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App;