import { Component } from 'react';
import './ourCoffeeFilter.scss';

class OurCofeeFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}
	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({term});
		this.props.onUpdateSearch(term);
	};
	render() {
		return (
			<div className="oc-filter__input">
				<p>Looking for</p>
				<input type="text" 
					placeholder="start typing here..."
					value={this.state.term}
					onChange={this.onUpdateSearch}
				/>
			</div>
		)
	}
};

export default OurCofeeFilter;