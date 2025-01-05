import React from "react";
import "../app.css";
import Product from "/src/Components/Product.jsx";
import image from "../assets/background-image.jpg";
import inceptionImage from "../assets/inception.jpg";
import ironManImage from "../assets/ironman3.jpg";
import titanicImage from "../assets/titanic.jpg";
import jurassicImage from "../assets/jurassic-world.jpg";
import tokyoDriftImage from "../assets/tokyo-drift.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "432vh",
        width: "100%",
      }}
    >
      <Product title="Inception" price="10$" image={inceptionImage} />
      <div className="horizontal-line"></div>

      <Product title="Iron Man 3" price="20$" image={ironManImage} />
      <div className="horizontal-line"></div>

      <Product title="Titanic" price="30$" image={titanicImage} />
      <div className="horizontal-line"></div>

      <Product title="Jurassic World" price="40$" image={jurassicImage} />
      <div className="horizontal-line"></div>

      <Product title="Tokyo Drift" price="50$" image={tokyoDriftImage} />
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Home;
