import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/about"
import Career from "./pages/career"
import FAQ from "./pages/faq"
import Announcements from "./pages/announcements"
import Contact from "./pages/contact"
import AyushmanCowfit from "./pages/ayushman-cowfit"
import CowfitStudio from "./pages/cowfit-studio"
import Gallery from "./pages/gallery"
import JobDescription from "./pages/job-description"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourServices/ayushman-cowfit" element={<AyushmanCowfit />} />
        <Route path="ourServices/cowfit-studio" element={<CowfitStudio/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/job-description" element={<JobDescription/>} />

        <Route path="*" element={<div className="h-[90vh] flex items-center justify-center">404 Page not found</div>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App