import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"; // Import your App's CSS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Hope from "./pages/Teams/Hope/Hope";
import WomenWings from './pages/Teams/WomenWings/WomenWings'
import AboutHope from "./pages/About/AboutHope/AboutHope";
import AboutWomenWings from "./pages/About/AboutWomenWings/AboutWomenWings";
import Contact from "./pages/Contact/Contact";
import Books from "./pages/Donate/Books/Books";
import Clothes from "./pages/Donate/Clothes/Clothes";
import Stationary from "./pages/Donate/Stationary/Stationary";
import Laal from "./pages/Gallery/Laal/Laal";
import Shiksha from "./pages/Gallery/Shiksha/Shiksha";
import Connect2Earth from "./pages/Gallery/Connect2Earth/Connect2Earth";
import RythuBandhuSamithi from "./pages/Gallery/RythuBandhuSamithi/RythuBandhuSamithi";
import Upcomming from "./pages/Events/Upcomming/Upcomming";
import Past from "./pages/Events/Past/Past";
import VissionMission from "./pages/Vision&Mission/VisionMission";
import ProjectLaal from "./pages/Projects/ProjectLaal/ProjectLaal";
import ProjectShiksha from "./pages/Projects/ProjectShiksha/ProjectShiksha";
import ProjectConnect2Earth from "./pages/Projects/ProjectConnect2Earth/ProjectConnect2Earth";
import ProjectRythuBandhuSamithi from "./pages/Projects/ProjectRythuBandhuSamithi/ProjectRythuBandhuSamithi";


function App() {
  return (
    <Router>
      
      <Header/>
      <Navbar/>
      {/* <Home /> */}
      <Routes>
        {/* navbar */}
        <Route path="/" element={<Home />} />

            {/* teams */}
            <Route path="/teams/hope" element={<Hope />}/>
            <Route path="/teams/womenwings" element={<WomenWings />}/>

            {/* about */}
            <Route path="/about/hope" element={<AboutHope />}/>
            <Route path="/about/womenwings" element={<AboutWomenWings />}/>

            {/* contact */}
            <Route path="/contact" element={<Contact />}/>

            {/* donate */}
            <Route path="/donate/books" element={<Books />}/>
            <Route path="/donate/clothes" element={<Clothes />}/>
            <Route path="/donate/stationary" element={<Stationary />}/>

            {/* gallery */}
            <Route path="/gallery/laal" element={<Laal />}/>
            <Route path="/gallery/shiksha" element={<Shiksha />}/>
            <Route path="/gallery/connect2earth" element={<Connect2Earth />}/>
            <Route path="/gallery/rythubandhusamithi" element={<RythuBandhuSamithi />}/>

            {/* events */}
            <Route path="/events/upcomming" element={<Upcomming />}/>
            <Route path="/events/past" element={<Past />}/>
            

            {/* vission & mission */}
            <Route path="/vissionmission" element={<VissionMission />}/>

            {/* projects */}
            <Route path="/projects/laal" element={<ProjectLaal/>}/>
            <Route path="/projects/shiksha" element={<ProjectShiksha />}/>
            <Route path="/projects/connect2earth" element={<ProjectConnect2Earth />}/>
            <Route path="/projects/rythubandhusamithi" element={<ProjectRythuBandhuSamithi />}/>
          </Routes>
      <Footer/>
    </Router>
  );
}

export default App;



