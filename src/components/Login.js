import {AppBar, Box, Button, Container, React, TextField, Toolbar, Typography} from '@mui/material'
import ShapeImage from "../images/shape.svg"
import {Link} from 'react-router-dom'
import Footer from './Footer'
import '../styles/index.css'
import { useState } from 'react'
import swal from 'sweetalert';
import AxiosClient from '../Apis/AxiosClient'

const Login = () =>  {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")


  const loginUser = () => {
    const userData = {
        "username": username,
        "password": password
    }
    AxiosClient.post('/users/login-user',userData).then(
      res => {if(res.status === 200)
        window.location.replace("/home")
      else {console.error(res.data.message)}}
    )
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `url(${ShapeImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "20rem",
        backgroundPosition: "center right",
      }}
    >
      <AppBar>
        <Toolbar
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
          }}
        >
          <Button color="secondary" variant="contained" size="large">
            Learn more
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Naziv aplikacije</Typography>
          <Typography variant="h2">Welcome</Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              id="username"
              name="username"
              label="Your username"
              variant="outlined"
              margin="normal"
              required
              onChange={(e)=>{setUsername(e.target.value)}}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type={'password'}
              variant="outlined"
              margin="normal"
              required
              onChange={(e)=>{setPassword(e.target.value)}}
              fullWidth
            />
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="large"
              fullWidth
              onClick={loginUser}
              sx={{ mt: 3, mb: 3 }}
            >
              Login
            </Button>
          </Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Don't have an account?
          </Typography>
          <Link to={'/register'}>
            <Button color="secondary" variant="outlined" size="large">
              Register
            </Button>
          </Link>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
}

export default Login