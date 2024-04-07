import products from '../data/products';
import CartItem from './CartItem';

const ShoppingCart = () => {
	return (
		<div className='container'>
			<div>
				<h1>Shopping Cart</h1>
				<button>remove all</button>
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
			<hr />
			<div>
				<div>
					<div>
						<span>Sub-total</span>
						<span>2 items</span>
					</div>
					<div>
						<span>Rs. 500</span>
					</div>
				</div>
				<div>
					<button>checkout</button>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
