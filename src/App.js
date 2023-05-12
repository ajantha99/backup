import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Login from "./login/Login";
import Home from "./login/Home";
import Registration from "./registration/Registration"
import ResetPassword from "./login/Resetpassword";
import VerifyEmail from "./login/Verifymail";

function App() {
  return (
    <div className="App">
      
      {/* <BrowserRouter>
          <Routes>
            <Route path="/home" element= {<Home/>} />
            <Route path="/" element= {<Login/>} />
          </Routes>
      </BrowserRouter> */}
      <Registration />
      {/* <ResetPassword/> */}
      {/* <VerifyEmail/> */}
    </div>
  );
}

export default App;
