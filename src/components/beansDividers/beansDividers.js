import { Component } from 'react';

import './beansDividers.scss';

class BeansDividerWhite extends Component {
	render() {
		return (
			<div className="beanDivider beanDivider_white">
			</div>
		)
	}
};
class BeansDividerDark extends Component {
	render() {
		return (
			<div className="beanDivider beanDivider_dark">
			</div>
		)
	}
};

export { BeansDividerWhite, BeansDividerDark };