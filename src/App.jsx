import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Corrected paths for core components, assuming they are in layout/ or directly in components/
import Navbar from './components/Navbar' // Assuming Navbar is now in components/layout/
import Footer from './components/Footer' // Assuming Footer is now in components/layout/
import ScrollToTop from './components/ScrollToTop' // Assuming ScrollToTop is directly in components/
import Home from './pages/Home'
import About from './pages/About'
import Wellness from './pages/Wellness' // This is the main Topic Grid Hub
import Contact from './pages/Contact' // Added Contact import which was missing in the original error log

// Import the 10 Topic Detail Pages from the wellness sub-directory
import SexualHealthIntroPage from './pages/wellness/SexualHealthIntroPage'
import ConsentPage from './pages/wellness/Consent'
import SafePracticesPage from './pages/wellness/SafePracticesPage'
import ReproductiveRightsPage from './pages/wellness/ReproductiveRightsPage'
import RespectfulCommunicationPage from './pages/wellness/RespectfulCommunicationPage'
import MenstrualHealthPage from './pages/wellness/MenstrualHealthPage'
import ConfidentialScreeningsPage from './pages/wellness/ConfidentialScreeningsPage'
import SeekingAdvicePage from './pages/wellness/SeekingAdvicePage'
import OpenDiscussionsPage from './pages/wellness/OpenDiscussionsPage'
import MentalWellbeingPage from './pages/wellness/MentalWellbeingPage'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* NESTED ROUTES for Wellness Section */}
          <Route path="/wellness" element={<Wellness />} /> 
          
          <Route path="/wellness/*" element={<Routes>
            {/* Topic Detail Routes using relative paths */}
            <Route path="sexual-health-intro" element={<SexualHealthIntroPage />} />
            <Route path="consent" element={<ConsentPage />} />
            <Route path="safe-practices" element={<SafePracticesPage />} />
            <Route path="reproductive-rights" element={<ReproductiveRightsPage />} />
            <Route path="respectful-communication" element={<RespectfulCommunicationPage />} />
            <Route path="menstrual-health" element={<MenstrualHealthPage />} />
            <Route path="confidential-screenings" element={<ConfidentialScreeningsPage />} />
            <Route path="seeking-advice" element={<SeekingAdvicePage />} />
            <Route path="open-discussions" element={<OpenDiscussionsPage />} />
            <Route path="mental-well-being" element={<MentalWellbeingPage />} />
          </Routes>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App