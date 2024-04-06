import { Component } from 'react';
import { BeansDividerDark } from '../../beansDividers/beansDividers';
import { Subtitle } from '../../titles/titles';

import './mainPageAbout.scss';

class MainPageAbout extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='mainpage__about mp-about'>
				<Subtitle 
					text={'About Us'}
					color={'dark'}
				/>
				<BeansDividerDark/>
				<p className="mp-about__text">
					Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					Afraid at highly months do things on at. Situation recommend objection do intention
					so questions. As greatly removed calling pleased improve an. Last ask him cold feel
					met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.</p>
				<p className="mp-about__text">
					Now residence dashwoods she excellent you. Shade being under his bed her, Much
					read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
					horrible but confined day end marriage. Eagerness furniture set preserved far
					recommend. Did even but nor are most gave hope. Secure active living depend son
					repair day ladies now.
				</p>
			</div>
		)
	}
};

export default MainPageAbout;