import { Component } from 'react';

import './headerNav.scss';

class HeaderNav extends Component {
	render() {
		return (
			<div className="headerNav">
				<div className="headerNav__row">
					<a href="#" className="headerNav__link" >Coffee House</a>
					<a href="#" className="headerNav__link" id='coffee'>Our coffee</a>
					<a href="#" className="headerNav__link" id='pleasure'>For your pleasure</a>
				</div>
			</div>
		)
	}
};

export default HeaderNav;