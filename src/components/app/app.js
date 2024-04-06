import { Component } from 'react';

import './app.css';

import MainPage from '../mainPage/mainPage';
import OurCoffee from '../ourCoffee/ourCoffee';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='app'>
				<MainPage />
				<OurCoffee />
			</div>
		)
	}
};

export default App;
