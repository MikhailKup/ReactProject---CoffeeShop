import { Component } from 'react';
import './ourCoffeeFilter.scss';
import FilterButtons from './filterButtons';
import ProductItems from '../../productItems/productItems';

class OurCofeeFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}
	render() {
		return (
			<div className='ourCoffee__filter oc-filter'>
				<div className="oc-filter__row">
					<div className="oc-filter__input">
						<p>Looking for</p>
						<input type="text" 
							placeholder="start typing here..."
							value={this.state.term}
							onChange={this.onUpdateSearch}
						/>
					</div>
					<FilterButtons/>
				</div>
				<ProductItems/>
			</div>
		)
	}
};

export default OurCofeeFilter;