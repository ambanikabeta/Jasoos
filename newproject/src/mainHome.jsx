import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './components/Navbar';
import Home from './components/Home';
import Images from './components/Images';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Services from './components/Services';
import Clients from './components/Clients';

// import Clients from './components/Clients';

function MainHome() {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigation = () => {
    navigate('/upload'); // Navigate to the Upload Page
  };

  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <AboutUs />
      <Images />
      {/* <Clients /> */}
      {/* <Services />   */}
      <Footer />
    </div>
  );
}

export default MainHome;
