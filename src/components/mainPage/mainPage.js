import { Component } from 'react';

import './mainPage.scss';

import MainPageHeader from './mainPageHeader/mainPageHeader';
import MainPageAbout from './mainPageAbout/mainPageAbout';
import MainPageGoods from './mainPageGoods/mainPageGoods';
import Footer from './../footer/footer'

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='mainpage'>
				<MainPageHeader />
				<MainPageAbout />
				<MainPageGoods />
				<Footer />
			</div>
		)
	}
};

export default MainPage;