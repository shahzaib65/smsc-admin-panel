import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Home";



function App() {
  return (
    <Router>
   <Routes>
   <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/" element={<Home/>}/>
    
   </Routes>
    </Router>
  );
}

export default App;
