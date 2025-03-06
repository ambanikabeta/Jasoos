import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import DiscordLogo from '../assets/dc.png';
import YoutubeLogo from '../assets/yt.png';
import WhatsappLogo from '../assets/wa.png';
import IgLogo from '../assets/ig.png';

import JasoosLogo from '../assets/jasoos esports logo (4).png';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_l7sshqo', // Replace with your EmailJS service ID
        'template_djov4jj', // Replace with your EmailJS template ID
        e.target,
        'Pz0HoiX6BROfdO--t' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send the message, please try again.');
        }
      );

    e.target.reset(); // Reset the form fields
  };

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center', // Center children horizontally
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center', // Center items within the container
          alignItems: 'center',
          gap: '50px',
          maxWidth: '1200px', // Limit content width for large screens
          width: '100%',
        }}
      >
        {/* About Us Section */}
        <div
          style={{
            flex: '1',
            minWidth: '250px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img style={{ width: '240px',marginBottom:"20px" }} src={JasoosLogo} alt="" />

          <a
            style={{
              fontFamily: 'Poppins',
              marginBottom: '15px',
              textDecoration: 'none',
              color: 'white',
            }}
            href="/upload"
          >
            <h3>JASOOS ESPORTS</h3>
          </a>
          <p
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              lineHeight: '1.8',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Jasoos Esports organizes thrilling online and offline tournaments of
            games such as BGMI, Free Fire & Valorant
          </p>
          <h3 style={{ fontFamily: 'Poppins', marginTop: '15px' }}>Follow Us</h3>
          <div
            className="socialIcons"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              // paddingLeft: '10px',
              gap:"10px"
            }}
          >
            <a target='blank' href="https://discord.com/invite/AatMhrgQkc">
              <img style={{ width: '35px' }} src={DiscordLogo} alt="" />
            </a>


            <a target='blank' href="https://insta.oia.bio/Jasoos-Esports">
                <img style={{ width: '35px' }} src={IgLogo} alt="" />
              </a>


            <a target='blank' href="https://www.youtube.com/channel/UCpl_MU50pxeVIpdelp_ZR6g">
              <img style={{ width: '35px' }} src={YoutubeLogo} alt="" />
            </a>


            <a target='blank'  href="https://whatsapp.com/channel/0029Va6oGCHCxoB2rYsdcW26">
            <img style={{ width: '35px' }} src={WhatsappLogo} alt="" /></a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'Poppins',
              fontSize: '17px',
            }}
          >
            CONTACT US
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '400px', // Limit form width
              margin: '0 auto', // Center form horizontally
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={{
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#333333',
                color: 'white',
                fontFamily: 'Poppins',
              }}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              style={{
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#333333',
                color: 'white',
                fontFamily: 'Poppins',
                marginTop: isMobile ? '10px' : '0', // Adjust margin for mobile
              }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#333333',
                color: 'white',
                fontFamily: 'Poppins',
              }}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="3"  
              maxLength={250}
              style={{
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#333333',
                color: 'white',
                fontFamily: 'Poppins',
                resize: 'none',
              }}
              required
            ></textarea>
            <button
              type="submit"
              style={{
                color: 'black',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                fontFamily: 'Poppins',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#C5303C')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#E63946')}
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
