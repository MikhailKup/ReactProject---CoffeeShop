import { Component } from 'react';
import './ourCoffeeHeader.scss';
import Navigation from '../../navigation/navigation'
import { Title } from '../../titles/titles';

class OurCofeeHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='ourCoffee__header oc-header'>
				<div className="oc-header__nav">
					<Navigation color={'white'}/>
				</div>
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