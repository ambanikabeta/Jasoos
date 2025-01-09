import React, { useRef } from "react";
import About1 from "../assets/About1.jpg";
import jagga from "../assets/jagga.png";
import arnab from "../assets/arnab.png";
import balram from "../assets/balram.png";
import Clients from "./Clients";
import Services from "./Services";
import styled from "styled-components";
import JasoosImg from "../assets/Jasoos.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import DiscordLogo from "../assets/discord-white-icon.webp";
import YoutubeLogo from "../assets/youtube-app-white-icon.webp";
import WhatsappLogo from "../assets/whatsappLogo.png";
import { motion } from "framer-motion";

const Imgcards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Card = styled.div`
  font-family: Poppins;
  text-align: center;
  width: 200px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    border: 3px solid rgb(255, 255, 255);
  }

  p {
    margin: 10px 0;
    font-size: 1.5rem;
  }
`;

const CounterDiv = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 30px 40px;
  overflow:hidden;

  div {
    background: #001437;
    color: white;
    padding: 20px;
    width: 250px;
    border-radius: 10px;
    text-align: center;
    font-family: Poppins;
    font-size: 1rem;
  }

  .count {
    font-size: 2rem;
    font-weight: bold;
    color: #00ffcc;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

function AboutUs() {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true, // Run only once when in view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.4,
        type: "spring",
        stiffness: 100, // Adds a bounce effect
      },
    },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1.1, // Slight overshoot for "flashy" effect
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.2,
        type: "spring",
        stiffness: 120, // Adds a bounce effect
      },
    },
  };
  
  return (
    <div className="divv">
    <motion.div
      className="mainAbout"
      id="AboutUs"
      ref={sectionRef}
      style={{
        margin: "0",
        paddingTop: "50px",
        background: "linear-gradient(to right, rgb(0, 11, 76), rgb(0, 19, 78))",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Row
        style={{
          alignItems: "center",
          height: "100%",
          paddingBottom: "30px",
        }}
      >
        <motion.img
          style={{
            width: "20rem",
            paddingTop:"30px"
          }}
          src={JasoosImg}
          alt="About"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="row1Img"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p
            style={{
              fontFamily: "Anton",
              fontSize: "5rem",
              lineHeight: "100px",
            }}
          >
            JASOOS<br /> ESPORTS
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              width: "300px",
              paddingTop: "10px",
            }}
          >
            Jasoos Esports organizes thrilling online and offline tournaments of
            games such as BGMI, Free Fire & Valorant
          </p>
        </motion.div>
      </Row>
    </motion.div>

      <CounterDiv ref={ref}>
        <div>
        <img style={{width:"35px"}} src={WhatsappLogo} alt="" />
          <p>Whatsapp Group members</p>
          <p style={{
            marginBottom:"9px"
          }} className="count">
            {inView && <CountUp start={0} end={1000} duration={2} separator="," />}+
          </p>
          <a style={{
              textDecoration:"none",
              color:"white",
              background: "linear-gradient(to right, rgb(27, 160, 0), rgb(0, 142, 24))",
              border:"1px solid white",
              padding:"3px 5px 3px 5px",
              borderRadius:"5px",
              }} href="/">JOIN GROUP</a>
        </div>
        <div>
        <img style={{width:"35px"}} src={YoutubeLogo} alt="" />
          <p>YouTube Subscribers</p>
          <p  style={{
            marginBottom:"9px"
          }} className="count">
            {inView && <CountUp start={0} end={8500} duration={2} separator="," />}+
          </p>
          <a style={{
              textDecoration:"none",
              color:"white",
              border:"1px solid white",
              padding:"3px 5px 3px 5px",
              background: "linear-gradient(to right, rgb(216, 11, 11), rgb(255, 0, 0))",
              borderRadius:"5px",
              }} href="/">SUBSCRIBE</a>
        </div>
        <div>
        <p style={{color:"white", fontSize:"35px", paddingBottom:"5px"}} href="#" class="fa fa-instagram"></p>
          <p>Instagram Followers</p>
          <p style={{
            marginBottom:"9px"
          }} className="count">
            {inView && <CountUp start={0} end={1000} duration={2} separator="," />}+
          </p>
          <a style={{
              textDecoration:"none",
              color:"white",
              border:"1px solid white",
              padding:"3px 5px 3px 5px",
              background: "linear-gradient(to right, rgb(255, 0, 157), rgb(255, 166, 0))",
              borderRadius:"5px",
              }} href="https://discord.com/invite/AatMhrgQkc">FOLLOW US</a>
        </div>
        <div>
        <img style={{width:"35px"}} src={DiscordLogo} alt="" />
          <p>Discord Followers</p>
          <p style={{
            marginBottom:"9px"
          }} className="count">
            {inView && <CountUp start={0} end={14000} duration={2} separator="," />}+
          </p>
          <a style={{
              textDecoration:"none",
              color:"white",
              border:"1px solid white",
              padding:"3px 5px 3px 5px",
              background: "linear-gradient(to right, rgb(0, 79, 183), rgb(0, 59, 160))",
              borderRadius:"5px",
              }} href="https://discord.com/invite/AatMhrgQkc">JOIN US</a>
        </div>
        <div>
        <img style={{width:"35px"}} src={WhatsappLogo} alt="" />
          <p>Whatsapp Channel</p>
          <p style={{
            marginBottom:"9px"
          }} className="count">
            {inView && <CountUp start={0} end={1000} duration={2} separator="," />}+
          </p>
          <a style={{
              textDecoration:"none",
              color:"white",
              border:"1px solid white",
              padding:"3px 5px 3px 5px",
              background: "linear-gradient(to right, rgb(27, 160, 0), rgb(0, 142, 24))",
              borderRadius:"5px",
              }} href="https://whatsapp.com/channel/0029Va6oGCHCxoB2rYsdcW26">JOIN US</a>
        </div>
      </CounterDiv>

      <div
        className="Team"
        style={{
          paddingBottom: "30px",
          height: "100%",
          background: "linear-gradient(to right, #210044 0%, #001437 100%)",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"white"
        }}
      >
        <p
          style={{
            fontFamily: "Anton",
            fontSize: "4rem",
            margin: "30px",
            color:"white"
          }}
        >
          OUR TEAM
        </p>
        <Imgcards>
          <Card>
            <img src={jagga} alt="Founder" />
            <p>JAGGA</p>
            <p
              style={{
                fontSize: "15px",
                color:"white"
              }}
            >
              FOUNDER & CEO
            </p>
          </Card>

          <Card>
            <img src={balram} alt="Co-Founder" />
            <p>BALRAM</p>
            <p
              style={{
                fontSize: "15px",
              }}
            >
              CO-FOUNDER & COO
            </p>
          </Card>

          <Card>
            <img src={arnab} alt="Project Lead" />
            <p>ARNAB</p>
            <p
              style={{
                fontSize: "15px",
              }}
            >
              CO-FOUNDER & <br /> PROJECT LEAD
            </p>
          </Card>
        </Imgcards>
      </div>
      <Services />
    </div>
  );
}

export default AboutUs;


