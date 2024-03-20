import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Home";
import Message from "./Message";



function App() {
  return (
    <Router>
   <Routes>
   <Route exact path="/" element={<Login/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/message" element={<Message/>}/>
    
    
   </Routes>
    </Router>
  );
}

export default App;
