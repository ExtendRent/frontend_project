import "./CarCard.css";
function CarCard(props) {
	return (
		<div className="product-card">
			<img src={props.car.img} alt={`Car: ${props.car.model}`} />
			<p><b>{props.car.brand}</b></p>
			<p>{props.car.model}</p>
			<p>{props.car.price}₺</p>
			<button type="button" className="rent-button">Hemen Kirala</button>
		</div>
	);
}

export default CarCard;