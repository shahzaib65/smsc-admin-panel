import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Message from "./Message";
import Registered from "./users/Registered";
import DeviceMessages from "./DeviceMessages";

function App() {
  return (
    <Router>
   <Routes>

<Route exact path="/" element={<Login/>}/>
     <Route exact path="/message" element={<Message/>}/>
    <Route exact path="/register" element={<Registered/>}/>
    <Route exact path="/received" element={<DeviceMessages/>}/>
    
   
    
    
    
   </Routes>
  
    </Router>
  );
}

export default App;
