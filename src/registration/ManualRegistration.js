//import  React from 'react';
import  React,{useEffect,useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Grid, FormGroup, Typography, Checkbox, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem, Select } from '@mui/material';
//import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from '@mui/material';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormLabel from '@mui/material/FormLabel';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const theme = createTheme();

const MyCheckbox = ({ label, checked, onChange }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};



export default function ManualRegistration() {

  //For gender
  const [selectedCheckbox, setSelectedCheckbox] = useState('');

  const handleCheckboxChange = (value) => {
    setSelectedCheckbox(value);
  };

  //For Whatsapp number
  const [wappNumber, setWappNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.slice(0, 10); // Allow only the first 10 characters

    setWappNumber(formattedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the WhatsApp number
    if (!wappNumber || !/^\d{10}$/.test(wappNumber)) {
      setErrorMessage('Please enter a valid 10-digit mobile WhatsApp number.');
      return;
    }

    // Reset form fields
    setWappNumber('');
    setErrorMessage('');
  };

  //For Back office checkbox
  const [isBackOffice, setIsBackOffice] = useState(false);

  const handleBackOfficeCheckboxChange = (event) => {
    setIsBackOffice(event.target.checked);
  };

  //For Back office position
  const [backOfficePosition, setBackOfficePosition] = useState('');

  const handleBackOfficePositionChange = (event) => {
    setBackOfficePosition(event.target.value);
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
            justifyContent: 'space-between',
          }}
        >
        </Box>

        <Typography component="h1" variant="h5">
            Personal Profile
        </Typography> 
        <hr/>

        <Box component="form" noValidate sx={{ mt: 3 }} ml={5}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
              <Typography raw sx={{ justifyContent: 'flex-center', flexDirection: 'row', alignItems: "center" }}>
                <span style={{paddingRight:'100px'}}>First Name</span>
                        <TextField
                            type="text"
                            //value={fname}
                            name="firstName"
                            id="firstName"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                         
                            sx={{width: 500, ml:2,}}
                        />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'80px'}}> Middle Name </span>
                        <TextField
                            type="text"
                            name="middleName"
                            id="middleName"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'98px'}}> Last Name </span>
                        <TextField
                            type="text"
                            name="lastName"
                            id="lastName"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'68px'}}> Personal Email  </span>     
                        <TextField
                            type="email"
                            name="pemail"
                            id="pemail"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'73px'}}> AIESEC Email  </span>  
                        <TextField
                            type="email"
                            name="email"
                            id="email"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              {/* <Typography>
              <span style={{paddingRight:'40px'}}> WhatsApp Number  </span>
                        <TextField
                            type="number"
                            name="wappNumber"
                            id="wappNumber"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography> */}
              <Typography>
                <span style={{ paddingRight: '40px' }}>WhatsApp Number</span>
                <TextField
                  type="text"
                  name="wappNumber"
                  id="wappNumber"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  value={wappNumber}
                  onChange={handleInputChange}
                  error={errorMessage !== ''}
                  helperText={errorMessage}
                  sx={{ width: 500, ml: 2 }}
                />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography> 
              <span style={{paddingRight:'85px'}}> NIC Number </span>
                        <TextField
                            type="number"
                            name="nicNumber"
                            id="nicNumber"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'120px'}}> Faculty </span>
              <Select
                            labelId="faculty"
                            id="demo-simple-select-autowidth"
                            name="nicNumber"
                            // id="faculty"
                            required
                            sx={{width: 500, ml:2}}
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
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography >
              <span style={{paddingRight:'40px'}}> AIESEC Join Date  </span> 
                        <TextField
                            type="date"
                            name="aiesect_jd"
                            id="aiesect_jd"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography>
              </Grid>

              {/* <Grid item xs={12}>             
                <FormGroup raw sx={{ justifyContent: 'flex-center', flexDirection: 'row' }} >
                <Typography pr={17.5}> Gender</Typography>
                    <FormControlLabel  control={<Checkbox />} label="Male" />
                    <FormControlLabel control={<Checkbox />} label="Female" />
                    <FormControlLabel control={<Checkbox />} label="Other" />
                </FormGroup>
              </Grid> */}
              <Grid item xs={12}>
                <FormGroup raw sx={{ justifyContent: 'flex-center', flexDirection: 'row' }}>
                  <Typography pr={17.5}>Gender</Typography>
                  <MyCheckbox
                    label="Male"
                    checked={selectedCheckbox === 'male'}
                    onChange={() => handleCheckboxChange('male')}
                  />
                  <MyCheckbox
                    label="Female"
                    checked={selectedCheckbox === 'female'}
                    onChange={() => handleCheckboxChange('female')}
                  />
                  <MyCheckbox
                    label="Other"
                    checked={selectedCheckbox === 'other'}
                    onChange={() => handleCheckboxChange('other')}
                  />
                </FormGroup>
              </Grid>
                        
              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'60px'}}> Home Address </span>
                        <TextField
                            type="text"
                            name="address"
                            id="address"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:3}}
                        />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'80px'}}> Home District </span>
                        <TextField
                            type="text"
                            name="district"
                            id="district"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography>
              </Grid> 

            </Grid>
        </Box><br/><br/>

        {/* Position Section */}
        <Typography component="h1" variant="h5">
                  Position
        </Typography> 
        <hr/>

        <Box component="form" noValidate sx={{ mt: 3 }} ml={5}>
            <Grid container spacing={2}>

            <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'40px'}}> Front Office Funtion Name </span>
              <Select
                            labelId="fof"
                            id="demo-simple-select-autowidth"
                            name="fof"
                            // id="faculty"
                            required
                            sx={{width: 500, ml:2}}
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
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'50px',textAlign:'center'}}> Front Office SubFunction </span>
                        <TextField
                            type="text"
                            name="fosf"
                            id="fosf"
                            variant='outlined'
                            color='primary'
                            fullWidth
                            required
                            sx={{width: 500, ml:2}}
                        />
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'86px'}}> Front Office Position </span>
              <Select
                            labelId="fop"
                            id="demo-simple-select-autowidth"
                            name="fof"
                            // id="faculty"
                            required
                            sx={{width: 500, ml:2}}
                        >
                            <MenuItem value="member">Member </MenuItem>
                            <MenuItem value="teamlead">Team leader	</MenuItem>
                            <MenuItem value="manager"> Manager </MenuItem>
                        </Select>
              </Typography>
              </Grid>

              {/* If FO position Member then FO Team Leader Name field apper, 0r position is Manager or Team Leader FO LCVP name field appears */}
              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'66px'}}> FO Team Leader Name </span>
              <Select
                            labelId="fotl"
                            id="demo-simple-select-autowidth"
                            name="fotl"
                            // id="faculty"
                            required
                            sx={{width: 500, ml:2}}
                        >
                            <MenuItem value="tharindhu">Tharindu </MenuItem>
                            <MenuItem value="satharsara">Sathsara	</MenuItem>
                            <MenuItem value="imali">Imali </MenuItem>
                            <MenuItem value="roshan">Roshan </MenuItem>
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
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'120px'}}> FO LCVP Name </span>
              <Select
                            labelId="folcvp"
                            id="demo-simple-select-autowidth"
                            name="folcvp"
                            // id="faculty"
                            required
                            sx={{width: 500, ml:2}}
                        >
                            <MenuItem value="tharindhu">Tharindu </MenuItem>
                            <MenuItem value="satharsara">Sathsara	</MenuItem>
                            <MenuItem value="imali">Imali </MenuItem>
                            <MenuItem value="roshan">Roshan </MenuItem>
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
              </Typography>
              </Grid>

              <Grid item xs={12}>
                    <FormGroup raw sx={{ justifyContent: 'flex-center', flexDirection: 'row' }}>
                      <Typography pr={8}>Are You in the Back Office</Typography>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={isBackOffice}
                            onChange={handleBackOfficeCheckboxChange}
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={!isBackOffice}
                            onChange={handleBackOfficeCheckboxChange}
                          />
                        }
                        label="No"
                      />
                    </FormGroup>
                    {isBackOffice && (
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography>
                            <span style={{ paddingRight: '38px' }}>
                              Back Office Function Name
                            </span>
                            <Select
                              labelId="bofname"
                              id="demo-simple-select-autowidth"
                              name="bofname"
                              required
                              sx={{ width: 500, ml: 2 }}
                            >
                              <MenuItem value="tm">TM</MenuItem>
                              <MenuItem value="ewa">EwA</MenuItem>
                              <MenuItem value="em">EM</MenuItem>
                              <MenuItem value="brand mkt">Brand MKT</MenuItem>
                              <MenuItem value="bd">BD</MenuItem>
                              <MenuItem value="f&l">F&L</MenuItem>
                            </Select>
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography>
                            <span style={{ paddingRight: '58px' }}>
                              Back Office SubFunction
                            </span>
                            <TextField
                              type="text"
                              name="bosf"
                              id="bosf"
                              variant="outlined"
                              color="primary"
                              fullWidth
                              required
                              sx={{ width: 500, ml: 2 }}
                            />
                          </Typography>
                        </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{ paddingRight: '97px' }}>Back Office Position</span>
                  <Select
                    labelId="bop"
                    id="demo-simple-select-autowidth"
                    name="bof"
                    required
                    sx={{ width: 500, ml: 2 }}
                    value={backOfficePosition}
                    onChange={handleBackOfficePositionChange}
                  >
                    <MenuItem value="member">Member</MenuItem>
                    <MenuItem value="teamlead">Team leader</MenuItem>
                    <MenuItem value="manager">Manager</MenuItem>
                  </Select>
              </Typography> <br/>
              {backOfficePosition === 'manager' && (
                <>
                  <Grid item xs={12}>
                    <Typography>
                    <span style={{paddingRight:'120px'}}> BO LCVP Name </span>
                    <Select
                                  labelId="folcvp"
                                  id="demo-simple-select-autowidth"
                                  name="folcvp"
                                  // id="faculty"
                                  required
                                  sx={{width: 500, ml:2}}
                              >
                                  <MenuItem value="tharindhu">Tharindu </MenuItem>
                                  <MenuItem value="satharsara">Sathsara	</MenuItem>
                                  <MenuItem value="imali">Imali </MenuItem>
                                  <MenuItem value="roshan">Roshan </MenuItem>
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
                    </Typography>
                  </Grid><br/>
                </>
              )}
              {backOfficePosition === 'teamlead' && (
                <>
                  <Grid item xs={12}>
                    <Typography>
                    <span style={{paddingRight:'120px'}}> BO LCVP Name </span>
                    <Select
                                  labelId="folcvp"
                                  id="demo-simple-select-autowidth"
                                  name="folcvp"
                                  // id="faculty"
                                  required
                                  sx={{width: 500, ml:2}}
                              >
                                  <MenuItem value="tharindhu">Tharindu </MenuItem>
                                  <MenuItem value="satharsara">Sathsara	</MenuItem>
                                  <MenuItem value="imali">Imali </MenuItem>
                                  <MenuItem value="roshan">Roshan </MenuItem>
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
                    </Typography>
                  </Grid><br/>
                </>
              )}
              {backOfficePosition === 'member' && (
                <>
                  <Grid item xs={12}>
                    <Typography>
                    <span style={{paddingRight:'68px'}}> BO Team Leader Name </span>
                    <Select
                                  labelId="fotl"
                                  id="demo-simple-select-autowidth"
                                  name="fotl"
                                  // id="faculty"
                                  required
                                  sx={{width: 500, ml:2}}
                              >
                                  <MenuItem value="tharindhu">Tharindu </MenuItem>
                                  <MenuItem value="satharsara">Sathsara	</MenuItem>
                                  
                      </Select>
                    </Typography>
                  </Grid>
                </>
              )}

            </Grid>
            </Grid>
            )}
            </Grid>

            {/* Send Username and Password via email
            <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}            
                  label="Send email with login informations."
                />
            </Grid> */}
            

            <Grid item xs={12} sm={7} >
            <Box display="flex" justifyContent="space-between"> 
              <Button
                type="reset"
                variant="contained"
                sx={{ mt: 3, mb: 2}}
                style={{ padding: "11px 25px" }}            
              >
               
              Clear
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2}}
                
              >
              Add New Member
              </Button>
            </Box> </Grid>
              

        </Grid>
        </Box><br/><br/>
         
      </Container>
    </ThemeProvider>
  );
}