import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Home";



function App() {
  return (
    <Router>
   <Routes>
   <Route exact path="/" element={<Login/>}/>
    <Route exact path="/home" element={<Home/>}/>
    
   </Routes>
    </Router>
  );
}

export default App;
