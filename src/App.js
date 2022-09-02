/* eslint-disable no-unused-vars */
import './styles/App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import schema from './utils/validate-password'
import util from './utils/util-functions'

const App = () => {

  const [password, setPassword] = useState('')

  const validatePassword = () => {
    console.log(schema.validate(password))
  }

  const validateUsername = () => {
    console.log(util.isValidUsername('kenan123'))
  }
     
  return (
    <div>
        <input type={'password'} placeholder={'Password'} onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button onClick={validatePassword}>Provjeri</button>
    </div>
  )
}

export default App;
