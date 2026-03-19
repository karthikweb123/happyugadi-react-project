import React, { useState } from "react";

const UgadiForm = () => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");

  const handleClick = () => {
    if (!name.trim()) {
      setWish("Please enter your name 🌿");
    } else {
      setWish(`Happy Ugadi, ${name}! 🌸 Wishing you joy, prosperity, and happiness in the new year! ✨`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      
      {/* Festive Intro Content */}
      <div style={{
        marginBottom: "30px",
        padding: "20px",
        backgroundColor: "#fff3e0",
        borderRadius: "12px",
        boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
        display: "inline-block"
      }}>
        <h2 style={{ color: "#e65100", marginBottom: "10px" }}>Celebrate Ugadi with Joy 🌸</h2>
        <p style={{ color: "#6d4c41", fontSize: "1rem", maxWidth: "400px", margin: "0 auto" }}>
          Enter your name below and receive a personalized Ugadi wish to share happiness with your loved ones!
        </p>

      </div>
<p>&nbsp;</p>
      {/* Name Input */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px 15px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          marginRight: "10px",
          marginTop: "20px"
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ff6f61",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "2px 2px 8px rgba(0,0,0,0.3)"
        }}
      >
        Get Wish
      </button>

      {/* Wish Output */}
      {wish && (
        <div style={{ marginTop: "30px", fontSize: "1.3rem", color: "#2e7d32", lineHeight: "1.5" }}>
          <p>{wish}</p>
          <img
            src="https://ugadi.sheetalsolutions.in/assets/3525118.jpg"
            alt="Ugadi Celebration"
            style={{ width: "300px", borderRadius: "15px", marginTop: "20px", boxShadow: "2px 2px 12px rgba(0,0,0,0.3)" }}
          />
        </div>
      )}
    </div>
  );
};

export default UgadiForm;
