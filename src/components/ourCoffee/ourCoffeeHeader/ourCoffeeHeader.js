import { Component } from 'react';
import './ourCoffeeHeader.scss';
import HeaderNav from '../../headerNav/headerNav';
import { Title } from '../../titles/titles';

class OurCofeeHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='ourCoffee__header oc-header'>
				<HeaderNav/>
				<div className="container">
					<Title 
						text={'Our Coffee'}
						color={'white'}
					/>
				</div>
			</div>
		)
	}
};

export default OurCofeeHeader;