
import Logo from "./Logo.png"
import BlueLogo from "./Blue-Logo.png"
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';


export default function UpHeader() {
  return (
    <div>
    <TableContainer  >
      <Table sx={{ minWidth:15}}>
        
          <TableRow >
            <TableCell sx={{border:0}}><img src={Logo} width={150} alt="Aiesec"/></TableCell>
            <TableCell sx={{border:0}} align="right"><img src={BlueLogo}  width={150} alt="Man Logo"/></TableCell>
          </TableRow>
          
    
        </Table>
    </TableContainer>
    </div>
       
      
    
  )
}
