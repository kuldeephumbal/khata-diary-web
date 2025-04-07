import React, { useState, useRef } from "react";

const ImageDisplayed = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-display-container" onClick={handleImageClick}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {imageSrc ? (
        <img src={imageSrc} alt="Uploaded" className="uploaded-image" />
      ) : (
        <div className="placeholder">
          <i className="fa-solid fa-camera"></i>
          <h3>Photo</h3>
        </div>
      )}
    </div>
  );
};

export default ImageDisplayed;
