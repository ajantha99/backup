import React, { useState } from "react";
import { Container } from "react-bootstrap";
import *as xlsx from 'xlsx';

// npm install xlsx

function ImportRegister() 
{
   const [excelData, setExcelData]= useState([]);
  const readExcel = async(e)=>{
   const file= e.target.files[0];
   const data= await file.arrayBuffer(file);
   const excelfile= xlsx.read(data);
   const excelsheet= excelfile.Sheets[excelfile.SheetNames[0]];
   const exceljson= xlsx.utils.sheet_to_json(excelsheet);
   //console.log(exceljson);
   setExcelData(exceljson);


  }
    return(
        <React.Fragment>
              <Container className="content">
               <div className="row fthight">               
               <div className="col-md-4 ">
               <h3 className='mt-3'>Fetch Excel Data in React js</h3>
               <label className="form-label">File </label>
               <input type="file" className="form-control" onChange={ (e)=>readExcel(e)}  />
               </div>
              
               <div className="col-md-12 mt-3">   
               {   excelData.length > 1 && (
                <table className="table">
                  <thead>
                     <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                     </tr>
                  </thead>
                  <tbody>
                    {                     
                    excelData.map( (getdata, index)=>(
                     <tr key={index}> 
                        <td>{ index+1 }</td>
                        <td>{ getdata.name} </td>
                        <td>{ getdata.email} </td>
                        <td>{ getdata.phoneno} </td>
                     </tr>
                     ) ) }
                  </tbody>
                </table>
               )
}

               </div>
               </div>
             </Container>
        </React.Fragment>
    );
}
export default ImportRegister;











// import * as React from 'react';
// //import {useEffect,useState} from 'react';
// //import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// //import { DropzoneArea } from 'material-ui-dropzone';

// const theme = createTheme();

// export default function ImportRegister() {

//   const [excelData, setExcelData] = React.useState([])
//   const [excelError, setExcelError] = React.useState('')
//   const file_type=['application/vnd.openxmlformats.officedocument.spreadsheetml.sheet','application/vnd.ms-excel','Microsoft Excel Worksheet (.xlsx)']
//   const handleChange=(e)=>{
//       const selected_file = e.target.files[0];

//       if(selected_file){
//         if(selected_file && file_type.includes(React.selcted_file.type)){
//           let reader = new FileReader();
//           reader.onload = (e)=>{
//             const workbook = React.read(e.target.result);
//             const sheet = workbook.SheetNames;
//             if(sheet.length){
//               const data = React.utils.sheet_to_json(workbook.Sheets[sheet[0]])
//               setExcelData(data);
//             }
//           }
//           reader.readAsArrayBuffer(selected_file);

//         }else{
//           setExcelError("Please upload only excel file")
//           setExcelData([])
//         }
//         // console.log(React.selcted_file.type)
//       }
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="m">
//         <CssBaseline />
//         <Box textAlign={'center'}
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         ></Box>

//         <Typography component="h1" variant="h6">
//             Import the Excel Sheet
//         </Typography>

//         <Box component="form" noValidate sx={{ mt: 3 }} ml={5}>
//             <Grid container spacing={2}>

//               {/* <Grid item xs={12}>
//               <DropzoneArea
//                 onChange={(files) => console.log('Files:', files)}
//               />
//               </Grid> */}

//               <Grid item xs={12}>
//                 <div className ='justify-center item-center flex flex-col'>
//                   <div>
//                     <input type='file'
//                     onChange={handleChange}
//                     />
//                   </div>

//                   <div>
//                       <table>
//                           <thead>
//                               <tr>
//                                 <th>ID</th>
//                                 <th>NAME</th>
//                                 <th>EMAIL</th>
//                               </tr>
//                           </thead>
//                           <tbody>
//                             {
//                               excelData.length?
//                               excelData.map((info)=>(
//                                 <tr>
//                                   <td> {info.ID} </td>
//                                   <td> {info.NAME} </td>
//                                   <td> {info.EMAIL} </td>

//                                 </tr>
//                               ))
//                               :
//                               excelError.length ? <tr>{excelError} </tr>:
//                                 <tr> No user data is present </tr>
//                             }
//                           </tbody>

//                       </table>

//                   </div>

//                 </div>
              
//               </Grid>


//             </Grid>
//         </Box><br/><br/>
         
//       </Container>
//     </ThemeProvider>
//   );
// }