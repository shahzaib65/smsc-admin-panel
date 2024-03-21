import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Message from "./Message";
import Registered from "./users/Registered";

function App() {
  return (
    <Router>
   <Routes>

<Route exact path="/" element={<Login/>}/>
     <Route exact path="/message" element={<Message/>}/>
    <Route exact path="/register" element={<Registered/>}/>
    
   
    
    
    
   </Routes>
  
    </Router>
  );
}

export default App;
