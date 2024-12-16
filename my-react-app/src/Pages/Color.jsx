import React, { useState } from "react";
import image from "../assets/background-image.jpg";
const Color = () => {
    const [color, setColor] = useState("#ffffff");
    return (
        <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          width: "100%",
        }}
      >
            <div style={{ textAlign: "center", padding: "50px", marginTop: "50px", fontSize: "30px" }}>
                <h1 style={{ color: color }}>Pick a Color!</h1>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    style={{ cursor: "pointer" }}
                />
                <div
                    style={{
                        margin: "20px auto",
                        height: "100px",
                        width: "200px",
                        backgroundColor: color,
                        border: "2px solid #000",
                    }}
                ></div>
                    <p style={{ color: color }}>The selected color is: <strong>{color}</strong></p> 
            </div>
        </div>
    );
};

export default Color;
