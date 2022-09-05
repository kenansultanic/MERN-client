import {AppBar, Box, Button, Container, React, TextField, Toolbar, Typography} from '@mui/material'
import ShapeImage from "../images/shape.svg";

import Footer from './Footer'

const Login = () =>  {
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
              fullWidth
            />
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 3, mb: 3 }}
            >
              Login
            </Button>
          </Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Don't have an account?
          </Typography>
          <Button color="secondary" variant="outlined" size="large">
            Register
          </Button>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
}

export default Login