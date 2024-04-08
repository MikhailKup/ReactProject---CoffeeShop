import { Component } from 'react';

import './ourCoffee.scss';

import OurCoffeeHeader from './ourCoffeeHeader/ourCoffeeHeader';
import OurCofeeAbout from './ourCoffeeAbout/ourCoffeeAbout';
import OurCofeeFilter from './ourCoffeeFilter/ourCoffeeFilter';
import FilterButtons from './ourCoffeeFilter/filterButtons';
import ProductItems from '../productItems/productItems';
import Footer from '../footer/footer';


class ourCoffee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{bgClass: 'aromistico', name: 'AROMISTICO 1 kg', country: 'Brazil', price: '6.99'},
				{bgClass: 'aromistico', name: 'KENYSTICO 1 kg', country: 'Kenya', price: '6.99'},
				{bgClass: 'aromistico', name: 'COLUMBISTICO 1 kg', country: 'Columbia', price: '6.99'},
				{bgClass: 'aromistico', name: 'AROMISTICO 1 kg', country: 'Brazil', price: '6.99'},
				{bgClass: 'aromistico', name: 'AROMISTICO 1 kg', country: 'Brazil', price: '6.99'},
				{bgClass: 'aromistico', name: 'COLUMBISTICO 1 kg', country: 'Columbia', price: '6.99'},
			],
			term: '',
			filter: 'all',
		}
		this.maxId = 7;
	}

	searchItem = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		})
	};

	onUpdateSearch = (term) => {
		this.setState({
			term: term
		})
	};

	filterItems = (items, filter) => {
		switch (filter) {
			case 'Brazil':
				return items.filter(item => item.country === 'Brazil');
			case 'Kenya':
				return items.filter(item => item.country === 'Kenya');
			case 'Columbia':
				return items.filter(item => item.country === 'Columbia');
			default:
				return items;
		}
	}

	onFilterSelect = (filter) => {
		this.setState(({filter}));
	}

	render() {
		const {data, term, filter} = this.state;
		const visibleData = this.filterItems(this.searchItem(data, term), filter);
		return (
			<div className='ourCoffee'>
				<OurCoffeeHeader />
				<OurCofeeAbout />

				<div className="ourCoffee__filter oc-filter">
					<div className="oc-filter__row">
						<OurCofeeFilter 
						onUpdateSearch={this.onUpdateSearch}
						/>
						<FilterButtons 
						filter={filter}
						onFilterSelect={this.onFilterSelect}
						/>
					</div>
				</div>

				<ProductItems data={visibleData}/>

				<Footer />
			</div>
		)
	}
};

export default ourCoffee;