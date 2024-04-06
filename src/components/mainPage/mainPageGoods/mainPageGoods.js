import { Subtitle } from '../../titles/titles';
import './mainPageGoods.scss';

const MainPageGoods = () => {
	const goodsData = [
		{bgClass: 'solimo', name: 'Solimo Coffee Beans 2 kg', price: '10.73'},
		{bgClass: 'presto', name: 'Presto Coffee Beans 1 kg', price: '15.99'},
		{bgClass: 'aromistico', name: 'AROMISTICO Coffee 1 kg', price: '6.99'},
	];
	const goods = goodsData.map(({bgClass, name, price}, index) => {
		const clases = 'goods-items__image ' + bgClass;
		const priceCount = price + '$';
		return (
			<div className="goods-items__item" key={index}>
				<span className={clases}></span>
				<p className="goods-items__name">{name}</p>
				<p className="goods-items__price">{priceCount}</p>
			</div>
		);
	});
	return (
		<div className='mainpage__goods mp-goods'>
			<div className="mp-goods__container">
				<Subtitle 
					text={'Our best'}
					color={'dark'}
				/>
				<div className="mp-goods__items goods-items">
					{goods}
				</div>
			</div>
		</div>
	);
};

export default MainPageGoods;