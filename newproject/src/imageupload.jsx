import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  font-family: "Arial, sans-serif";
  padding: 30px;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2d3748;
  animation: ${fadeIn} 1s ease-out;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ImageCard = styled.div`
  position: relative;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Description = styled.p`
  padding: 10px;
  font-size: 0.9rem;
  background-color: transparent;
  text-align: left;
  color: #2d3748;
  font-family: "Poppins", "serif"; 
  font-weight:10px;
  text-align:left;
  white-space: pre-wrap;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

const ImageUploadAndDisplay = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://jasoosbackend.onrender.com/images-with-descriptions");
      setImages(response.data);
    } catch (err) {
      console.error("Error fetching images:", err);
      alert("Error fetching images. Please try again later.");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      try {
        await axios.delete(`https://jasoosbackend.onrender.com/images/${id}`);
        setImages((prevImages) => prevImages.filter((image) => image._id !== id));
      } catch (err) {
        console.error("Error deleting image:", err);
        alert("Error deleting image. Please try again.");
      }
    }
  };

  return (
    <Container>
      <Header>Gallery</Header>
      <Gallery>
        {images.length > 0 ? (
          images.map((image) => (
            <ImageCard key={image._id}>
              <Image
                src={`data:${image.image.contentType};base64,${btoa(
                  new Uint8Array(image.image.data.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                  )
                )}`}
                
                alt={image.description}
              />
              <Description>{image.description}</Description>
              <DeleteButton onClick={() => handleImageDelete(image._id)}>×</DeleteButton>
            </ImageCard>
          ))
        ) : (
          <p>No images uploaded yet. Start by uploading some!</p>
        )}
      </Gallery>
    </Container>
  );
};

export default ImageUploadAndDisplay;
