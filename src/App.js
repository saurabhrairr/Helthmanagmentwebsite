
import './App.css';
import Header from './component/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Service from './component/Service';
import CKD from './component/CKD';
import ESRD from './component/ESRD';
import Hypertension from './component/Hypertension';
import Diabetes from './component/Diabetes';
import HeartFailure from './component/HeartFailure';
import Progresswork from './component/Progresswork';
import NavBarnav from './component/NavBarnav';
import Newsandupdate from './component/Newsandupdate';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/ContactUs" element={<ContactUs/>}></Route>
    <Route path="/Service" element={<Service/>}></Route>
    <Route path="/CKD" element={<CKD/>}></Route>
    <Route path="/Hypertension" element={<Hypertension/>}></Route>
    <Route path="/Diabetes" element={<Diabetes/>}></Route>
    <Route path="/HeartFailure" element={<HeartFailure/>}></Route>
    <Route path="/Progresswork" element={<Progresswork/>}></Route>
    <Route path="/ESRD" element={<ESRD/>}></Route>
    <Route path="/NavBarnav" element={<NavBarnav/>}></Route>
    <Route path="/Newsandupdate" element={<Newsandupdate/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

