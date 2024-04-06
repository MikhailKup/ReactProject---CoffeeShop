import { Component } from 'react';
import { BeansDividerDark } from '../beansDividers/beansDividers.js'

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
					<a href="#" className="footer__link" >Coffee House</a>
					<a href="#" className="footer__link" id='coffee'>Our coffee</a>
					<a href="#" className="footer__link" id='pleasure'>For your pleasure</a>
				</div>
				<BeansDividerDark/>
			</div>
		)
	}
};

export default Footer;