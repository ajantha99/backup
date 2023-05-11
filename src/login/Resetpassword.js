import { borders } from '@mui/system';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UpHeader from "./UpHeader";


const theme = createTheme();

export default function ResetPassword() {

  return (
    <>
    <Grid container  ml={1} >
          
           <Grid item xs={12}>
              <UpHeader />
           </Grid>

    <Grid item xs={12}></Grid>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={ {border: 1, borderRadius: '5%', borderColor: 'grey.500',boxShadow: 3}} >
        
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderColor: 'grey.500'
          }}
        >
          
          <Typography  component="h4" variant="h5"  sx={{ mt:'10px'}}>
            Reset Your Password
          </Typography>
          <Typography  color={'GrayText'}  fontSize={"13px"}  >
            Enter the email address associated with your account and <br/>we will send you a link to reset your password.
          </Typography>
          
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              //autoFocus
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              //onClick={login}
            >
              Continue
            </Button>
            
            <Grid item >
                <Link href="#" variant="body2" display="center" justifyContent="flex-center" >
                  {"Back to Sign in"} <br/> <br/><br/>
                </Link>
            </Grid>
            
          </Box>
        </Box>
  
      </Container>
    </ThemeProvider>
    </Grid>
    
    </>
  );
}