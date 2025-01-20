import './App.css';
import Header from './Header';
import Home from './Home';
import ManagementProgram from './ManagementProgram';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactUs from './ContactUs';



function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/mp" element={<ManagementProgram />} /> {/* Management Programs route */}
          <Route path="/cu" element={<ContactUs />} /> {/* Contact Us route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

