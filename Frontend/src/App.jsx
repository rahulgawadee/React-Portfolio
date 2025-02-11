import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ContactPage from './Pages/ContactUs';
import Homepage from './Pages/Hero';
import ResumePage from './Pages/MyResume';
import ProjectsPage from './Pages/MyProject';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<ResumePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
