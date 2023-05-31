
import  React,{useEffect,useState} from 'react';
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
import FormGroup from '@mui/material/FormGroup';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormLabel from '@mui/material/FormLabel';




const theme = createTheme();

export default function ManualRegistration() {
  const [fname, setFirstName] = () => {}
    

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
                            value={fname}
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
              <Typography>
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

              <Grid item xs={12}>             
                <FormGroup raw sx={{ justifyContent: 'flex-center', flexDirection: 'row' }} >
                <Typography pr={17.5}> Gender</Typography>
                    <FormControlLabel  control={<Checkbox />} label="Male" />
                    <FormControlLabel control={<Checkbox />} label="Female" />
                    <FormControlLabel control={<Checkbox />} label="Other" />
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
              <span style={{paddingRight:'50px'}}> Front Office SubFunction </span>
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
                <FormGroup raw sx={{ justifyContent: 'flex-center', flexDirection: 'row' }} >
                <Typography pr={8}> Are You in the Back Office </Typography>
                    <FormControlLabel  control={<Checkbox />} label="Yes" /> 
                    <FormControlLabel control={<Checkbox />} label="No"  />
                    {/* value={"Yes"} onClick={(value)=>checkValue(value)} value={"NO"}*/}
                    
                </FormGroup>
              </Grid>
{/* Should remove one */}
              {/* <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'45px'}}> Are You in the Back Office </span>
              <Select
                            labelId="bo"
                            id="demo-simple-select-autowidth"
                            name="bo"
                            // id="faculty"
                            required
                            sx={{width: 500, ml:2}}
                        >
                            <MenuItem value="member">Yes </MenuItem>
                            <MenuItem value="teamlead">No	</MenuItem>
                        </Select>
              </Typography>
              </Grid> */}
{/* If yes */}
              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'38px'}}> Back Office Function Name </span>
              <Select
                            labelId="bofname"
                            id="demo-simple-select-autowidth"
                            name="bofname"
                            // id="faculty"
                            required
                            sx={{width: 500, ml:2}}
                        >
                            <MenuItem value="tm">TM	</MenuItem>
                            <MenuItem value="ewa">EwA	</MenuItem>
                            <MenuItem value="em">EM	</MenuItem>
                            <MenuItem value="brand mkt">Brand MKT	</MenuItem>
                            <MenuItem value="bd">BD </MenuItem>
                            <MenuItem value="f&l">F&L </MenuItem>
                        </Select>
              </Typography>
              </Grid>

              <Grid item xs={12}>
              <Typography>
              <span style={{paddingRight:'58px'}}> Back Office SubFunction </span>
                        <TextField
                            type="text"
                            name="bosf"
                            id="bosf"
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
              <span style={{paddingRight:'90px'}}> Back Office Position </span>
              <Select
                            labelId="bop"
                            id="demo-simple-select-autowidth"
                            name="bof"
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

              {/* if BO position TL then.. */}
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

            {/* Send Username and Password via email */}
            <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}            
                  label="Send email with login informations."
                />
            </Grid>
            

            <Grid item xs={12} sm={6.7} >
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