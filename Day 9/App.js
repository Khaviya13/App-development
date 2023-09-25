import Notification from './component/Notification';
import  RegistrationForm from './component/RegistrationForm';
import { Dashboard } from './component/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./component/Login";
import Terms from "./ComponentS/Terms";
import PrivacyPolicy from "./ComponentS/privacy";
import FaqSection from "./ComponentS/Faq";
import Home from '@mui/icons-material/Home';
import About from './ComponentS/About';
import IncidentReportingForm from './component/IncidentReporting';
import LandingPage from './ComponentS/LandingPage';
import FileUploadForm from './component/FileUploadForm';

import Chat from './component/Chat';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/faq" element={<FaqSection/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/registrationform' element={<RegistrationForm/>}/>
      <Route path="/notification" element={<Notification/>}/>   
      <Route path="/home"element={<Home/>}/>
      <Route path="about"element={<About/>}/>
      <Route path="/incidentreporting" element={<IncidentReportingForm/>}/>
      <Route path="/FileuploadForm" element={<FileUploadForm/>}/>
      <Route path="/Chat" element={<Chat/>}/>
    

      </Routes>
    </BrowserRouter>
  );
}

export default App;