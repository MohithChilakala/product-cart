import { useEffect, useState } from 'react';
import OrangeJuice from '../assets/orange-juice.webp';
import PomegranateJuice from '../assets/pomegranate-juice.webp';
import CartItem from './CartItem';

const ShoppingCart = () => {
	const [products, setProducts] = useState([
		{
			name: 'Orange Juice',
			image: OrangeJuice,
			isVeg: true,
			quantity: '250ml',
			cost: 250,
			count: 2,
		},
		{
			name: 'Pomegranate Juice',
			image: PomegranateJuice,
			isVeg: true,
			quantity: '250ml',
			cost: 250,
			count: 1,
		},
	]);
	const [totalCost, setTotalCost] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		let curCost = 0;
		let curItems = 0;
		products.forEach((product) => {
			if (product.count > 0) {
				curItems += 1;
				curCost += product.cost * product.count;
			}
		});
		setTotalItems(curItems);
		setTotalCost(curCost);
	}, []);

	return (
		<div className='container'>
			<div className='top'>
				<h3 className='shopping-cart'>Shopping Cart</h3>
				<button className='remove-all'>Remove all</button>
			</div>
			<div>
				{products.map((product, index) => (
					<CartItem
						key={index}
						name={product.name}
						image={product.image}
						isVeg={product.isVeg}
						quantity={product.quantity}
						cost={product.cost}
					/>
				))}
			</div>
			<div className='total'>
				<div>
					<div>
						<div>
							<span className='sub-total'>Sub-total</span>
							<span className='total-items'>{totalItems} items</span>
						</div>
						<div>
							<span className='final-price'>Rs. {totalCost}</span>
						</div>
					</div>
					<div>
						<button className='checkout'>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
