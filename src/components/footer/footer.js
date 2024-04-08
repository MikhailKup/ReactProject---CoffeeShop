import { Component } from 'react';
import { BeansDividerDark } from '../beansDividers/beansDividers.js';
import Navigation from '../navigation/navigation.js';

import './footer.scss';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='footer'>
				<div className="footer__nav">
					<Navigation color={'dark'}/>
				</div>
				<BeansDividerDark/>
			</div>
		)
	}
};

export default Footer;