import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Login from "./login/Login";
import Home from "./login/Home";
import Registration from "./registration/Registration"
import ResetPassword from "./login/Resetpassword";
import VerifyEmail from "./login/Verifymail";
import Test from "./registration/RegistrationTest";

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
      <Registration />
      {/* <ResetPassword/> */}
      {/* <VerifyEmail/> */}
      {/* <Test/> */}

    </div>
  );
}

export default App;
