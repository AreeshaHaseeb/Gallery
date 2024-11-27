import Product from "./components/Product";
import inceptionImage from "./assets/inception.jpg";
import ironManImage from "./assets/ironman3.jpg";
import titanicImage from "./assets/titanic.jpg";
import jurassicImage from "./assets/jurassic-world.jpg";
import tokyoDriftImage from "./assets/thefastandthefurioustokyodrift.jpg";
function App() {
  return (
    <>
      <Product title="Inception" price="10$" image={inceptionImage} />
      <Product title="Iron Man 3" price="20$" image={ironManImage} />
      <Product title="Titanic" price="30$" image={titanicImage} />
      <Product title="Jurassic World" price="40$" image={jurassicImage} />
      <Product title="Tokyo Drift" price="50$" image={tokyoDriftImage} />
    </>
  );
}

export default App
