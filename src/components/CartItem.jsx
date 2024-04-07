import { useState } from 'react';

const CartItem = ({ image, name, isVeg, quantity, cost }) => {
	const [cnt, setCnt] = useState(1);

	return (
		<div className='cartItem'>
			<div className='product-image'>
				<img width={90} height={90} src={image} alt={name} />
			</div>
			<div className='details'>
				<div className='info'>
					<div>
						<p className='itemName'>{name}</p>
						<p className='quantity'>{quantity}</p>
						{isVeg ? (
							<img
								width='20'
								height='20'
								src='https://img.icons8.com/fluency/48/vegetarian-food-symbol.png'
								alt='vegetarian'
							/>
						) : (
							<img
								width='20'
								height='20'
								src='https://img.icons8.com/fluency/48/non-vegetarian-food-symbol.png'
								alt='non-vegetarian'
							/>
						)}
					</div>
				</div>
				<div className='count'>
					<span> <button>+</button> {cnt} <button>-</button> </span>
				</div>
				<div className='cost'>
					<span>Rs. {cost}</span>
					<button className='save-for-later'>Save for later</button>
					<button className='remove'>Remove</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
