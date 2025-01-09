import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TournLogo from '../assets/arena.png';
import Esports from '../assets/esports.png';
import Gfx from '../assets/gfx.png';
import Event from '../assets/event.png';
import Brand from '../assets/brand.png';

const Container = styled.div`
  margin: 0;
  padding-bottom: 40px;
  display: flex;
  width: 100vw;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(to right, rgb(0, 11, 76), rgb(0, 19, 78));
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Title = styled.p`
  font-family: Anton;
  font-size: 4rem;
  color: white;
  margin: 30px 0;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-family: Poppins;
  line-height: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MiniContainer = styled.div`
  height: 190px;
  width: 150px;
  color: white;
  padding: 20px 15px 15px 15px;
  border-radius: 15px;
  background-color: #001437;
`;

const MiniTitle = styled.p`
  font-weight: 700;
  margin: 8px 0px 8px 0px;
`;

const MiniText = styled.p`
  font-size: 12px;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function Services() {
  return (
    <Container id="services">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <Title>OUR SERVICES</Title>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={popIn}
        transition={{ duration: 0.8 }}
      >
        <Cont>
          <MiniContainer>
            <img style={{ width: '35px' }} src={TournLogo} alt="" />
            <MiniTitle>Tournament Management</MiniTitle>
            <MiniText>
              Efficiently organizing esports tournaments with seamless scheduling
              and results tracking.
            </MiniText>
          </MiniContainer>

          <MiniContainer>
            <img style={{ width: '35px' }} src={Esports} alt="" />
            <MiniTitle>eSports Production</MiniTitle>
            <MiniText>
              Providing professional broadcasting and streaming for immersive esports
              experiences.
            </MiniText>
          </MiniContainer>

          <MiniContainer>
            <img style={{ width: '35px' }} src={Gfx} alt="" />
            <MiniTitle>GFX</MiniTitle>
            <MiniText>
              Designing eye-catching visuals for events, branding, and promotions.
            </MiniText>
          </MiniContainer>

          <MiniContainer>
            <img style={{ width: '35px' }} src={Event} alt="" />
            <MiniTitle>Offline Event</MiniTitle>
            <MiniText>
              Hosting engaging in-person esports events with live competitions and
              audience interaction.
            </MiniText>
          </MiniContainer>

          <MiniContainer>
            <img style={{ width: '35px' }} src={Brand} alt="" />
            <MiniTitle>Brand Integration</MiniTitle>
            <MiniText>
              Integrating brands and sponsors to maximize visibility and audience
              connection.
            </MiniText>
          </MiniContainer>
        </Cont>
      </motion.div>
    </Container>
  );
}

export default Services;
