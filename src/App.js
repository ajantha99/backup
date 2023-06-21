import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Login from "./login/Login";
import Home from "./login/Home";
import ResetPassword from "./login/Resetpassword";
import VerifyEmail from "./login/VerifyEmail";
// import Registration from "./registration/Registration"
// import Test from "./registration/RegistrationTest";
import ManualRegister from "./registration/ManualRegistration";
//import ImportRegistration from "./registration/ImportRegistration";
//import ImportRegister from "./registration/ImportRegister";
import Import from "./ImportRegi/Import";
import Contact from "./login/Contact";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
           <Routes>
             <Route path="/home" element= {<Home/>} />
             <Route path="/" element= {<Login/>} />
             <Route path="/forgot" element={<ResetPassword />} />
             <Route path="/ManualRegistration" element ={<ManualRegister />} />
             <Route path="/ImportRegistration" element ={<Import />} />
             <Route path="/VerifyEmail" element={<VerifyEmail />} />
           </Routes>
      </BrowserRouter>

       {/* <VerifyEmail/> */}
      {/* <Registration /> */}
      {/* <Test/> */}
      {/* <ManualRegister /> */}
      {/* <ImportRegistration/> */}
      {/* <ImportRegister/> */}
      {/* <Import /> */}
      {/* <Contact /> */}
    
    </div>
  );
}

export default App;
