import './productItems.scss';

const ProductItems = () => {
	const itemsData = [
		{bgClass: 'aromistico', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
		{bgClass: 'aromistico', name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99'},
		{bgClass: 'aromistico', name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99'},
		{bgClass: 'aromistico', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
		{bgClass: 'aromistico', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
		{bgClass: 'aromistico', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
	];
	const items = itemsData.map(({bgClass, name, price, country}, index) => {
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