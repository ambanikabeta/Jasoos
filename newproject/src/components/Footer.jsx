import React, { useEffect, useState } from 'react';
import DiscordLogo from '../assets/discord-white-icon.webp'
import YoutubeLogo from '../assets/youtube-app-white-icon.webp'
import JasoosLogo from '../assets/Jasoos.png'

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust width for mobile breakpoint
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener
    };
  }, []);

  return (
    <footer
    id='footer'
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center", // Center children horizontally
        alignItems:"center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // Center items within the container
          alignItems: "flex-start",
          gap: "50px",
          maxWidth: "1200px", // Limit content width for large screens
          width: "100%",
        }}
      >

        {/* About Us Section */}
        <div style={{ flex: "1", minWidth: "250px",display: "flex",
          flexWrap: "wrap",
          flexDirection:"column",
          alignItems: "center",}}>

            <img style={{width:"50px"}} src={JasoosLogo} alt="" />

        <a style={{ fontFamily: "Poppins", marginBottom: "15px",textDecoration:"none",color:"white" }} href="/upload"><h3>JASOOS ESPORTS</h3></a>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "14px",
              lineHeight: "1.8",
              marginBottom: "20px",
              textAlign:"center"
            }}
          >
            Jasoos Esports organizes thrilling online and offline tournaments of games such as BGMI, Free Fire & Valorant
          </p>
          <h3 style={{ fontFamily: "Poppins", marginTop: "15px" }}>Follow Us</h3>
          <div className="socialIcons" style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            justifyItems:"center"
          }}>
          <a href="https://discord.com/invite/AatMhrgQkc"><img style={{width:"25px"}} src={DiscordLogo} alt="" /></a>
          <a style={{textDecoration:"none",color:"white", fontSize:"25px",padding:"10px 20px 10px 20px"}} href="https://insta.oia.bio/Jasoos-Esports" class="fa fa-instagram"></a>
          <a href=""><img style={{width:"25px"}} src={YoutubeLogo} alt="" /></a>
          <a style={{textDecoration:"none",color:"white", fontSize:"25px",padding:"10px 20px 10px 20px"}} href="https://whatsapp.com/channel/0029Va6oGCHCxoB2rYsdcW26" class="fa fa-whatsapp"></a>

          </div>
        </div>

        {/* Contact Form Section */}
        <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
          <h2 style={{
            fontFamily:"Poppins",
            fontSize:"17px"
          }}>CONTACT US</h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "400px", // Limit form width
              margin: "0 auto", // Center form horizontally
            }}
          >
            <input
              type="text"
              placeholder="Name"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#333333",
                color: "white",
                fontFamily: "Poppins",
              }}
            />
            <input
              type="text"
              placeholder="Phone"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#333333",
                color: "white",
                fontFamily: "Poppins",
                marginTop: isMobile ? "10px" : "0", // Adjust margin for mobile
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#333333",
                color: "white",
                fontFamily: "Poppins",
              }}
            />
            <textarea
              placeholder="Message"
              rows="3"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#333333",
                color: "white",
                fontFamily: "Poppins",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                // backgroundColor: "#E63946",
                color: "black",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                fontFamily: "Poppins",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#C5303C")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#E63946")}
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
