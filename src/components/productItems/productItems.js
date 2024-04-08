import './productItems.scss';

const ProductItems = ({data}) => {
	const items = data.map(({bgClass, name, price, country}, index) => {
		const clases = 'product-items__image ' + bgClass;
		const priceCount = price + '$';
		return (
			<div className="product-items__item" key={index}>
				<span className={clases}></span>
				<p className="product-items__name">{name}</p>
				<p className="product-items__country">{country}</p>
				<p className="product-items__price">{priceCount}</p>
			</div>
		);
	});
	return (
				<div className="product-items">
					{items}
				</div>
	);
};

export default ProductItems;