import React, { useState } from "react";

function Range() {
  const [value, setValue] = useState(50); // Initial value for the slider

  const handleChange = (event) => {
    setValue(event.target.value); // Update state on slider movement
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <label htmlFor="slider" style={{ display: "block", marginBottom: "10px" }}>
        Value: {value}
      </label>
      <input
        id="slider"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        style={{
          width: "100%",
          marginBottom: "20px",
          appearance: "none",
          background: "#ddd",
          height: "6px",
          borderRadius: "5px",
        }}
      />
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Current Value: {value}
      </div>
    </div>
  );
}

export default Range;
