import './App.css';
import Header from './Header';
import Home from './Home';
import ManagementProgram from './ManagementProgram';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItProgram from './ItProgram';
import AboutUs from './AboutUa';
import ContactUs from './ContactUs';



function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/Ishwarya-BI" element={<Home />} /> {/* Home page route */}
          <Route path="/mp" element={<ManagementProgram />} /> {/* Management Programs route */}
          <Route path="/cu" element={<ContactUs />} /> {/* Contact Us route */}
          <Route path='/it'element={<ItProgram/>}/>
          <Route path='/au'element={<AboutUs/>}/>


        </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;

