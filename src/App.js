import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Login from "./login/Login";
import Home from "./login/Home";
// import Registration from "./registration/Registration"
import ResetPassword from "./login/Resetpassword";
// import VerifyEmail from "./login/Verifymail";
// import Test from "./registration/RegistrationTest";
//import ManualRegister from "./registration/ManualRegistration";
//import ImportRegistration from "./registration/ImportRegistration";
import ImportRegister from "./registration/ImportRegister";

function App() {
  return (
    <div className="App">
      
      {/* <BrowserRouter>
           <Routes>
             <Route path="/home" element= {<Home/>} />
             <Route path="/" element= {<Login/>} />
             <Route path="/forgot" element={<ResetPassword />} />
           </Routes>
      </BrowserRouter> */}
      {/* <Registration /> */}
      {/* <ResetPassword/> */}
      {/* <VerifyEmail/> */}
      {/* <Test/> */}
      {/* <ManualRegister /> */}
      {/* <ImportRegistration/> */}
      <ImportRegister/>
    
    </div>
  );
}

export default App;
