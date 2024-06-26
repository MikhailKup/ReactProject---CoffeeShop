import { Component } from 'react';
import './mainPageHeader.scss';
import Navigation from '../../navigation/navigation';
import { BeansDividerWhite } from '../../beansDividers/beansDividers';
import { Title, Subtitle } from '../../titles/titles';

class MainPageHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='mainpage__header mp-header'>
				<div className="mp-header__nav">
					<Navigation color={'white'}/>
				</div>
				<div className="container">
					<Title 
					text={'Everything You Love About Coffee'}
					color={'white'}
					/>
					<BeansDividerWhite/>
					<Subtitle 
					text={'We makes every day full of energy and taste'}
					color={'white'}
					/>
					<Subtitle 
					text={'Want to try our beans?'}
					color={'white'}
					/>
					<button className="mp-header__btn">More</button>
				</div>
			</div>
		)
	}
};

export default MainPageHeader;