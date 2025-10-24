import { useState } from "react";
import { motion } from "framer-motion";
import '../styles/Gallery.css';
export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
  ]);

  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => Math.max(0, prev - 3));
    } else {
      setCurrentIndex((prev) => Math.min(galleryImages.length - 3, prev + 3));
    }
  };

  const handleAddImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setGalleryImages((prev) => [...prev, event.target.result]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const visibleImages = galleryImages.slice(currentIndex, currentIndex + 3);

  return (
    <>
      <div className="bottom-right">
        <div className="sidecontent">
          <div className="sidecontent1">
            <div className="sidetopcontent">
              <img
                src="/top-right1.png"
                alt="Top Right 1"
                className="top-right-image"
              />
            </div>
            <div className="sidebottomcontent">
              <img
                src="/top-right2.png"
                alt="Top Right 2"
                className="bottom-right-image"
              />
            </div>
          </div>
          <div className="sidecontent2"></div>
        </div>
        <div className="gallery-container">
          <div className="gallery-header">
            <button className="gallery-tab">Gallery</button>
            <button className="add-image-btn" onClick={handleAddImage}>
              + ADD IMAGE
            </button>
            <div className="gallery-nav">
              <button
                className="nav-btn"
                onClick={() => handleScroll("left")}
                disabled={currentIndex === 0}
              >
                <img src="/left-arrow.png" alt="Left Arrow" className="arrow" />
              </button>
              <button
                className="nav-btn"
                onClick={() => handleScroll("right")}
                disabled={currentIndex >= galleryImages.length - 3}
              >
                <img
                  src="/right-arrow.png"
                  alt="Right Arrow"
                  className="arrow"
                />
              </button>
            </div>
          </div>
          <div className="gallery-grid">
            {visibleImages.map((img, index) => (
              <motion.div
                key={currentIndex + index}
                className="gallery-item"
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.1 },
                }}
              >
                <img src={img} alt={`Gallery ${currentIndex + index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
