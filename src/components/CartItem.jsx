import { useState } from "react";

const CartItem = ({ image, name, isVeg, quantity, cost }) => {
	const [cnt, setCnt] = useState(1);

	return (
		<div>
			<div>
				<img src={image} alt={name} />
			</div>
			<div>
				<div>
					<div>
						<p>{name}</p>
						<p>{quantity}</p>
						{isVeg ? (
							<img
								width='48'
								height='48'
								src='https://img.icons8.com/fluency/48/vegetarian-food-symbol.png'
								alt='vegetarian-food-symbol'
							/>
						) : (
							<img
								width='48'
								height='48'
								src='https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png'
								alt='non-vegetarian'
							/>
						)}
					</div>
					<div>
						<span>+</span>
						<p>{cnt}</p>
						<span>-</span>
					</div>
					<div>
						<span>Rs. {cost}</span>
						<button>save for later</button>
						<button>remove</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
