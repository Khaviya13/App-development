
import './App.css';
import { Dashboard } from './component/Dashboard';

import PrimarySearchAppBar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/RegistrationForm';
import Login from './component/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard/>}> </Route>
        <Route path="/topbar" element={<PrimarySearchAppBar/>}/>  
         
        <Route path="/login" element={<Login/>}/>  
        <Route path="/register" element={<Register/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
