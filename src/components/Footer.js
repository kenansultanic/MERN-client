import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Box, Container, Grid, Link, React, Typography, Stack} from '@mui/material'
import WaveImage from "../images/wave.svg";

const Footer = () => {
    return (
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
    )
}

export default Footer