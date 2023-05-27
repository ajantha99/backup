import * as React from 'react';
//import {useEffect,useState} from 'react';
//import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { DropzoneArea } from 'material-ui-dropzone';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const theme = createTheme();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  Firstname: String,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { Firstname, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function ImportRegister() {

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
        ></Box>


        <Typography component="h1" variant="h6">
            Import Excel Sheet
        </Typography>

        <Box component="form" noValidate sx={{ mt: 3 }} ml={5}>
            <Grid container spacing={2}>

            <Grid item xs={12}>
              <Typography raw sx={{ justifyContent: 'flex-center', flexDirection: 'row', alignItems: "center" }}>
                {/* <span style={{paddingRight:'100px'}}>First Name</span> */}
                        <TextField
                            type="file"
                            name="file"
                            id="file"
                            variant="standard"
                            color='primary'
                            fullWidth
                            required
                            variant-border="none"
                         
                            sx={{width: 300, ml:1}}
                        />
              </Typography>
            </Grid> <br/> <br/>

            <Grid item xs={12}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1800 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align='center'> First Name </StyledTableCell>
                      <StyledTableCell align="center"> Middle Name </StyledTableCell>
                      <StyledTableCell align="center"> Last Name </StyledTableCell>
                      <StyledTableCell align="center"> AIESEC Email</StyledTableCell>
                      <StyledTableCell align="center">Personal Email </StyledTableCell>
                      <StyledTableCell align="center">whatsapp Number </StyledTableCell>
                      <StyledTableCell align="center">NIC Number </StyledTableCell>
                      <StyledTableCell align="center">Faculty </StyledTableCell>
                      <StyledTableCell align="center"> AIESEC Join Date </StyledTableCell>
                      <StyledTableCell align="center">Home Address </StyledTableCell>
                      <StyledTableCell align="center">Home District </StyledTableCell>
                      <StyledTableCell align="center">FOF Name </StyledTableCell>
                      <StyledTableCell align="center"> Front Office SubFunction </StyledTableCell>
                      <StyledTableCell align="center">Faculty </StyledTableCell>
                      <StyledTableCell align="center">Faculty </StyledTableCell>
                      <StyledTableCell align="center">Faculty </StyledTableCell>
                      <StyledTableCell align="center">Faculty </StyledTableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                      </StyledTableRow>
                    ))} */}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>


            </Grid>
        </Box><br/><br/>
         
      </Container>
    </ThemeProvider>
  );
}