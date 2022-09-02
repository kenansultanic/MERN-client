
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WaveImage from "../images/wave.svg";
import ShapeImage from "../images/shape.svg";
import axios from "axios";

export default function Register() {

  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const funk = () => {
    const obj = {
      "first_name": first_name,
      "last_name": last_name,
      "username": username,
      "email": email,
      "password": password
    }

    axios.post('http://localhost:3001/user/register',obj)
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
              id="first_name"
              name="first_name"
              label="First name"
              variant="outlined"
              autoComplete="First Name"
              margin="normal"
              required
              fullWidth
              onChange={(e) => { setFirst_name(e.target.value) }}
            />
            <TextField
              id="last_name"
              name="last_name"
              label="Last name"
              variant="outlined"
              autoComplete="Last name"
              margin="normal"
              required
              fullWidth
              onChange={(e) => { setLast_name(e.target.value) }}
            />
            <TextField
              id="username"
              name="username"
              label="Your username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(e) => { setUsername(e.target.value) }}
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="outlined"
              autoComplete="email"
              margin="normal"
              required
              fullWidth
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              autoComplete="password"
              margin="normal"
              required
              fullWidth
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 3, mb: 3 }}
              onClick={funk}
            >
              Register
            </Button>
          </Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Already have an account?
          </Typography>
          <Button color="secondary" variant="outlined" size="large">
            Login
          </Button>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          mt: "auto",
          py: 6,
          backgroundImage: `url(${WaveImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs>
              <Stack spacing={2}>
                <Link href="#" variant="body2">
                  Get in Touch
                </Link>
                <Link href="#" variant="body2">
                  Privacy Policy
                </Link>
                <Link href="#" variant="body2">
                  Resources
                </Link>
              </Stack>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Follow US
              </Typography>
              <Stack direction="row" spacing={2}>
                <Link href="#" variant="body2">
                  <FacebookIcon />
                </Link>
                <Link href="#" variant="body2">
                  <TwitterIcon />
                </Link>
                <Link href="#" variant="body2">
                  <LinkedInIcon />
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

