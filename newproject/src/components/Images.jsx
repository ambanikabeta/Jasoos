import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  margin-top: -120px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100vw;
  height: 120vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh; /* Reduced height for mobile */
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 0 0 100%;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(0.9)")};
  transition: transform 0.3s ease;
  margin-top: 55px;

  @media (max-width: 500px) {
    margin-top: -100px;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    margin-top: 0px;
  }
`;

const Photo = styled.img`
  padding-top: 20px;
  width: 100%;
  max-width: 35vw;
  object-fit: cover;
  position: relative;

  @media (max-width: 500px) {
    max-width: 75vw;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    max-width: 55vw;
    margin-top: 40px;
  }
`;

const DescriptionOverlay = styled.div`
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 35vw;
  height: 35vw;
  background-color: rgb(233, 206, 172);
  color: black;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight:500;
  font-family: "Poppins";
  padding: 10px;
  white-space: pre-wrap;
  overflow-y: auto;
  box-sizing: border-box;
  z-index: 2;

  @media (max-width: 500px) {
    width: 75vw;
    height: 75vw;
    padding: 15px 15px 15px 15px;
    font-size: 7px;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    width: 60vw;
    height: 60vw;
    padding: 15px 15px 15px 15px;
    font-size: 9px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  &.prev {
  padding-bottom:80px;
    left: 00px;
  }

  &.next {
  padding-bottom:80px;
    right: 0px;
  }
`;

const Images = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://jasoosbackend.onrender.com/images-with-descriptions"
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleDescription = (index) => {
    setVisibleDescriptionIndex(
      visibleDescriptionIndex === index ? null : index
    );
  };

  if (images.length === 0) {
    return <p style={{ color: "white", fontSize: "20px" }}>Loading images...</p>;
  }

  return (
    <Container id="images">
      <div
        className="heroText"
        style={{
          fontFamily: "Anton",
          fontSize: "3rem",
          lineHeight: "90px",
          marginTop: "150px",
          color: "white",
          letterSpacing: "2px",
        }}
      >
        TOURNAMENTS
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "80%",
          height: "60%",
        }}
      >
        <Button className="prev" onClick={prevImage}>&#10094;</Button>

        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 100}%)`,
            width: "100%",
          }}
        >
          {images.map((image, index) => (
            <ImageContainer
              key={image._id}
              isActive={index === currentIndex}
              onClick={() => toggleDescription(index)}
            >
              <Photo
                src={`data:${image.image.contentType};base64,${btoa(
                  new Uint8Array(image.image.data.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                  )
                )}`}
                alt={image.name}
              />

              {image.description && (
                <DescriptionOverlay
                  isVisible={visibleDescriptionIndex === index}
                >
                  {image.description}
                </DescriptionOverlay>
              )}
            </ImageContainer>
          ))}
        </div>

        <Button className="next" onClick={nextImage}>&#10095;</Button>
      </div>
    </Container>
  );
};

export default Images;
