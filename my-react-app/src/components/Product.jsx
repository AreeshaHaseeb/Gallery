import "../app.css";


function Product(props) {
  return (
    <div className="movie">
      <img src={props.image} alt="movie-poster" class="img" />
      <div class="text">
      <h3 className="movie-title">{props.title}</h3>
      <p className="price">{props.price}</p></div>
    </div>
  );
}

export default Product;
 