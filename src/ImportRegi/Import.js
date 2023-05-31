import {useState} from 'react'
import {Data} from './Data'
import * as XLSX from 'xlsx'


function Import() {
  
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState(null);
  // it will contain array of objects

  // handle File
//   const fileType=['application/vnd.ms-excel'];
const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      // console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else{
      setExcelData(null);
    }
  }
  
  return (
    <div className="container">

      {/* upload file section */}
      <div className='form'>
        <form className='form-group' autoComplete="off"
        onSubmit={handleSubmit}>
          <label><h3>Import a Excel file</h3></label>
          <br></br>
          <input type='file' className='form-control'
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>View Users </button>
        </form>
      </div>

      <br></br>
      
      {/* view file section */}
      {/* <h5>View Excel file</h5> */}
      <div className='viewer'>
        {excelData===null&&<>No file selected</>}
        {excelData!==null&&(
          <div className='table-responsive'>
           <table className='table' cellPadding={10} border={1} style={{ minWidth: '650px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' ,fontFamily: 'Times New Roman, serif'}}>
              <thead style={{backgroundColor: '#f5f5f5'}}>
                <tr>
                  <th scope='col' style={{paddingRight:'20px'}}>ID</th>
                  <th scope='col' style={{paddingRight:'20px'}}>First Name</th>
                  <th scope='col' style={{paddingRight:'20px'}}>Last Name</th>
                  <th scope='col' style={{paddingRight:'20px'}}>Gender</th>
                  <th scope='col'style={{paddingRight:'20px'}}>Email</th>
                  <th scope='col' style={{paddingRight:'20px'}}>Age</th>
                  <th scope='col' style={{paddingRight:'20px'}}>Date</th>                  
                </tr>
              </thead>
              <tbody style={{fontWeight: 'normal'}}>
                <Data excelData={excelData}/>
              </tbody>
            </table>            
          </div>
        )}       
      </div>

    </div>
  );
}

export default Import;