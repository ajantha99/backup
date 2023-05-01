import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Login from "./login/Login";
import Home from "./login/Home";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Routes>
            <Route path="/home" element= {<Home/>} />
            <Route path="/" element= {<Login/>} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
