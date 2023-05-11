import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from '@mui/material';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  id="middleName"
                  label="Middle Name"
                  name="middleName"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="birthdate"
                  label="Birth Date"
                  name="birthdate"
                  type="date"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">Gender</InputLabel>
                <Select
                    labelId="gender"
                    id="gender"
                    
                    input={<OutlinedInput label="Gender" />}
                    // onChange={handleChange}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>

                </FormControl>
              </Grid>


              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
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
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
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


              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="street"
                  label="Street Name"
                  name="street"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="line2"
                  label="Line2"
                  name="line2"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                />
              </Grid>
              <Grid item xs={12} sm={3} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">Province</InputLabel>
                <Select
                    labelId="province"
                    id="province"
                    
                    input={<OutlinedInput label="Province" />}
                    // onChange={handleChange}
                  >
                    <MenuItem value="Central">Central </MenuItem>
                    <MenuItem value="Eastern">Eastern	</MenuItem>
                    <MenuItem value="North-Central">North Central </MenuItem>
                    <MenuItem value="Northern">Northern </MenuItem>
                    <MenuItem value="North-Western">North Western  </MenuItem>
                    <MenuItem value="Sabaragamuwa">Sabaragamuwa	</MenuItem>
                    <MenuItem value="Southern">Southern	</MenuItem>
                    <MenuItem value="Uva">Uva	</MenuItem>
                    <MenuItem value="Western">Western	</MenuItem>

                  </Select>
                </FormControl>
              </Grid>


              <Grid item xs={12} sm={6} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">Faculty</InputLabel>
                <Select
                    labelId="faculty"
                    id="faculty"
                    
                    input={<OutlinedInput label="Fuculty" />}
                    // onChange={handleChange}
                  >
                    <MenuItem value="Central">Faculty of Agriculture </MenuItem>
                    <MenuItem value="Eastern">Faculty of Engineering	</MenuItem>
                    <MenuItem value="North-Central"> Faculty of Fisheries and Marine Sciences & Technology </MenuItem>
                    <MenuItem value="Northern"> Faculty of Humanities and Social Sciences </MenuItem>
                    <MenuItem value="North-Western"> Faculty of Management and Finance </MenuItem>
                    <MenuItem value="Sabaragamuwa">Faculty of	Medicine </MenuItem>
                    <MenuItem value="Southern"> Faculty of Science</MenuItem>
                    <MenuItem value="Uva"> Faculty of	Graduate studies </MenuItem>
                    <MenuItem value="Western"> Faculty of	Technology and Allied Health Sciences</MenuItem>

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="wppnum"
                  label="WhatsApp Number"
                  name="wppnum"
                />
              </Grid>

              <Grid item xs={12} sm={3} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">Front Office Function </InputLabel>
                <Select
                    labelId="fof"
                    id="fof"
                    
                    input={<OutlinedInput label="Front Office Function" />}
                    // onChange={handleChange}
                  >
                    <MenuItem value="igv cxp">iGV CXP </MenuItem>
                    <MenuItem value="icv b2b">iGV B2B	</MenuItem>
                    <MenuItem value="icx m&ir">iCX M&IR </MenuItem>
                    <MenuItem value="icx mkt">iCX MKT </MenuItem>
                    <MenuItem value="igt">iGT  </MenuItem>
                    <MenuItem value="ogv">oGV	</MenuItem>
                    <MenuItem value="ogt">oGT	</MenuItem>
                    <MenuItem value="ogx b2b">oGX B2B	</MenuItem>
                    <MenuItem value="ocx mkt">oCX MKT	</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">Front Office Position </InputLabel>
                <Select
                    labelId="fop"
                    id="fop"
                    
                    input={<OutlinedInput label="Front Office Position" />}
                    // onChange={handleChange}
                  >
                    <MenuItem value="member">Member </MenuItem>
                    <MenuItem value="teamlead">Team leader	</MenuItem>
                    <MenuItem value="manager"> Manager </MenuItem> 
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">Back Office Function </InputLabel>
                <Select
                    labelId="bof"
                    id="bof"
                    
                    input={<OutlinedInput label="Back Office Function" />}
                    // onChange={handleChange}
                  >
                    <MenuItem value="Central">TM </MenuItem>
                    <MenuItem value="Eastern">EwA	</MenuItem>
                    <MenuItem value="North-Central">EM </MenuItem>
                    <MenuItem value="Northern">Brand MKT </MenuItem>
                    <MenuItem value="North-Western">BD  </MenuItem>
                    <MenuItem value="Sabaragamuwa">F&L	</MenuItem>
   
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">Back Office Position </InputLabel>
                <Select
                    labelId="bop"
                    id="bop"
                    
                    input={<OutlinedInput label="Back Office Position" />}
                    // onChange={handleChange}
                  >
                    <MenuItem value="member">Member </MenuItem>
                    <MenuItem value="teamlead">Team leader	</MenuItem>
                    <MenuItem value="manager"> Manager </MenuItem> 
                  </Select>
                </FormControl>
              </Grid>
              

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="joindate"
                  label="Join Date in AIESEC"
                  name="joindate"
                  type="date"
                />
              </Grid>
              <Grid item xs={12} sm={4} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">OEVP Name </InputLabel>
                <Select
                    labelId="oevpname"
                    id="oevpname"
                    
                    input={<OutlinedInput label="OEVP Name" />}
                    // onChange={handleChange}
                  >
                    <MenuItem value="tharindhu">Tharindu </MenuItem>
                    <MenuItem value="icv b2b">Sathsara	</MenuItem>
                    <MenuItem value="icx m&ir">Imali </MenuItem>
                    <MenuItem value="icx mkt">Roshan </MenuItem>
                    <MenuItem value="igt">Chathurya  </MenuItem>
                    <MenuItem value="ogv">Sajani	</MenuItem>
                    <MenuItem value="ogt">Hasee	</MenuItem>
                    <MenuItem value="ogx b2b">Shalini	</MenuItem>
                    <MenuItem value="ocx mkt">Sasandana	</MenuItem>
                    <MenuItem value="ogx b2b">Dishan	</MenuItem>
                    <MenuItem value="ogx b2b">Chithya	</MenuItem>
                    <MenuItem value="ogx b2b">Jayani	</MenuItem>
                    <MenuItem value="ogx b2b">Themal	</MenuItem>
                    <MenuItem value="ogx b2b">Dlueen	</MenuItem>
                    <MenuItem value="ogx b2b">Menuka	</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="tlmname"
                  label="TL/Manager Name"
                  name="tlmname"
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
            {/* <Grid container justifyContent="flex-end">
              
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}