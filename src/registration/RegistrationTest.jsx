import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from '@mui/material';


const theme = createTheme();

export default function SignUp() {

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="m">
        <CssBaseline />
        <Box textAlign={'center'}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Manual Registration
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
             

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="aiesecmail"
                  label="AIESEC Mail"
                  name="aiesecmail"
                  type="email"
                  autoComplete="aiesecmail"
                />
              </Grid>
   
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Send Username and Password via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             
            >
              Register
            </Button>
           
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}