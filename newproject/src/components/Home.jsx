import React, { useEffect, useState } from 'react';
import MainImg from '../assets/mainImg.png';
import styled from 'styled-components';

// Styled component
const Herotext = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 6rem;
  line-height: 100px;
  margin-top: 100px;
  color: white;
  letter-spacing: 2px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 1s ease, transform 1s ease;
  @media(max-width:500px){
  margin-top:-100px;
  }
`;
const Imgg =styled.div`
@media (max-width:1000px){
margin-top:180px;}`;


function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Add delay for animation
  }, []);

  return (
    <div
      id="home"
      style={{
        margin: "0",
        padding: "0",
        display: "flex",
        width: "100vw",
        height: "110vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: 'sticky',
        backgroundSize:"contain",
      }}
    >
      <Herotext isVisible={isVisible}>
        JASOOS <br />
        ESPORTS

      </Herotext>
      <Imgg>
        <img
          src={MainImg}
          alt="Main"
          style={{
            width: "80%",
            marginTop: "-130px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 1s ease, transform 1s ease',
            position: "relative",
          }}
        />
      </Imgg>
    </div>
  );
}

export default Home;
