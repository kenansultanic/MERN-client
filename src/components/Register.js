import {AppBar, Box, Button, Container, React, TextField, Toolbar, Typography} from '@mui/material'
import ShapeImage from "../images/shape.svg";
import { useState } from 'react';
import AxiosClient from '../Apis/AxiosClient';
import Footer from './Footer'

const Register = () =>  {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const RegisterUser = () => {
      const obj = {
        "first_name": name,
        "last_name": surname,
        "username": username,
        "email": email,
        "password": password
      }
  
      AxiosClient.post('/user/register',obj)
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              id="first_name"
              name="first_name"
              label="Your name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={e => setName(e.target.value)}
            />
            <TextField
              id="last_name"
              name="last_name"
              label="Your surname"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={e => setSurname(e.target.value)}

            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type={'password'}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={e => setPassword(e.target.value)}

            />
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 3, mb: 3 }}
              onClick={RegisterUser}
            >
              Register
            </Button>
          </Box>
          <Button color="secondary" variant="outlined" size="large">
            Login instead
          </Button>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
}

export default Register