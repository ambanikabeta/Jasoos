import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Imagecontainer = styled.div`
  position: relative;
  flex: 0 0 100%;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(0.9)')};
  transition: transform 0.3s ease;
`;

const FlipCard = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 40vw; /* Limit width of the flip card */
  height: 100%; /* Ensure height is set for the flip card */
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* Ensure height is set for the inner card */
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const Front = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%; /* Ensure height is set for front side */
`;

const Back = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%; /* Ensure height is set for back side */
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px; /* Add some padding for text visibility */
`;

const Images = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null); // Track which image is flipped

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://jasoosbackend.onrender.com/images-with-descriptions");
        console.log(response.data);
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); // Flip the card on click
  };

  if (images.length === 0) {
    return <p style={{ color: "white", fontSize: "20px" }}>Loading images...</p>;
  }

  return (
    <div
      id="images"
      style={{
        marginTop: "-80px",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        width: "100vw",
        height: "120vh",
        overflow: "hidden",
      }}
    >
      <div
        className="heroText"
        style={{
          fontFamily: "Anton",
          fontSize: "4rem",
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
        {/* Prev Button */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "2rem",
            color: "white",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          &#8592;
        </button>

        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 100}%)`,
            width: "100%",
          }}
        >
          {images.map((image, index) => (
            <Imagecontainer key={image._id} isActive={index === currentIndex}>
              <FlipCard onClick={() => handleFlip(index)}>
                <CardInner isFlipped={flippedIndex === index}>
                  {/* Front Side - Image */}
                  <Front>
                    <img
                      src={`data:${image.image.contentType};base64,${btoa(
                        new Uint8Array(image.image.data.data).reduce(
                          (data, byte) => data + String.fromCharCode(byte),
                          ""
                        )
                      )}`}
                      alt={image.name}
                      style={{ paddingTop: "20px", width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Front>
                  {/* Back Side - Description */}
                  <Back>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "black",
                        fontFamily: "Poppins, serif",
                        textAlign: "center",
                      }}
                    >
                      {image.description}
                    </p>
                  </Back>
                </CardInner>
              </FlipCard>
            </Imagecontainer>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "2rem",
            color: "white",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Images;
