import React from 'react';
import { Link } from 'react-scroll';
import JasoosLogo from '../assets/jasoos esports logo (4).png'

const Navbar = () => {
  return (
    <nav
      style={{
        fontFamily: "Poppins",
        // marginTop: "10px",
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        background: "linear-gradient(87deg, rgb(12, 100, 184) 0%, rgb(1, 29, 64) 100%)",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: "white",
        padding: "10px 20px",
        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <div
        className="logo"
        style={{
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        <img src={JasoosLogo} style={{
          width:"30px"
        }}/>
      </div>
      <div
        className="othernav"
        style={{
          fontSize: "15px",
          display: "flex",
          gap: "20px",
          paddingLeft: "80px",
        }}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          style={{
            fontWeight: '400',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Home
        </Link>

        <Link
          to="AboutUs"
          smooth={true}
          duration={500}
          style={{
            fontWeight: '400',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          About Us
        </Link>


        
        <Link
          to="services"
          smooth={true}
          duration={500}
          style={{
            fontWeight: '400',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Services
        </Link>

        

        <Link
          to="images"
          smooth={true}
          duration={500}
          style={{
            fontWeight: '400',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#4a90e2')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Tournaments
        </Link>


      </div>
      
      {/* JOIN US! Button */}
      <Link
        to="footer"
        smooth={true}
        duration={500}
        style={{
          fontWeight: '400',
          color: 'white',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'color 0.3s',
        }}
      >
        <button
          style={{
            background: "transparent",
            backgroundColor:"rgb(0, 114, 237)",
            border: "1px solid rgb(255, 255, 255)",
            color: "white",
            fontSize: "13px",
            fontWeight: "bold",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#4a90e2";
          }}
        >
          JOIN US!
        </button>
      </Link>
      <style>
      {`
          @media (max-width: 768px) {
            .hamburger {
              display: none;
            }

            .nav-links {
              display: flex !important;
              flex-direction: row;
              position: static;
              background: none;
              padding: 0;
            }
          }

          @media (max-width: 768px) {
            .hamburger {
              display: block;
            }

            .nav-links.open {
              display: flex !important;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
