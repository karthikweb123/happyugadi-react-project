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
          marginRight: "10px"
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

      {wish && (
        <div style={{ marginTop: "30px", fontSize: "1.3rem", color: "#2e7d32", lineHeight: "1.5" }}>
          <p>{wish}</p>
          <img
            src="https://images.unsplash.com/photo-1581992021676-89428e2f5de2?auto=format&fit=crop&w=800&q=80"
            alt="Ugadi Flowers"
            style={{ width: "250px", borderRadius: "15px", marginTop: "20px", boxShadow: "2px 2px 12px rgba(0,0,0,0.3)" }}
          />
        </div>
      )}
    </div>
  );
};

export default UgadiForm;
