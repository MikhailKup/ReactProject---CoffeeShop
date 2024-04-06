import { Component } from 'react';
import { BeansDividerDark } from '../../beansDividers/beansDividers';
import { Subtitle } from '../../titles/titles';
import './ourCoffeeAbout.scss';

class OurCofeeAbout extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='ourCoffee__about oc-about'>
				<div className="oc-about__row">
					<div className="oc-about__image">
					</div>
					<div className="oc-about__text">
						<Subtitle 
							text={'About our beans'}
							color={'dark'}
						/>
						<BeansDividerDark />
						<div className="oc-about__descr">
							<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
							<p>Afraid at highly months do things on at. Situation recommend objection do intention
									so questions. 
									As greatly removed calling pleased improve an. Last ask him cold feel
									met spot shy want. Children me laughing we prospect answered followed. At it went
									is song that held help face.</p>
						</div>
					</div>
				</div>
				<div className="oc-about__divider"></div>
			</div>
		)
	}
};

export default OurCofeeAbout;