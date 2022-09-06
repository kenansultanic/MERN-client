/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router"
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
    
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App;