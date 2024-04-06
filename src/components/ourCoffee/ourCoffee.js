import { Component } from 'react';

import './ourCoffee.scss';

import OurCoffeeHeader from './ourCoffeeHeader/ourCoffeeHeader';
import OurCofeeAbout from './ourCoffeeAbout/ourCoffeeAbout';
import OurCofeeFilter from './ourCoffeeFilter/ourCoffeeFilter';
import Footer from '../footer/footer';


class ourCoffee extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='ourCoffee'>
				<OurCoffeeHeader />
				<OurCofeeAbout />
				<OurCofeeFilter />
				<Footer />
			</div>
		)
	}
};

export default ourCoffee;