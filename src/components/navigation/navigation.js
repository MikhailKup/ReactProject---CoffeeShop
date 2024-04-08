import './navigation.scss';

function Navigation({color}) {
	const clazz = `navigation__row navigation__row_${color}`;
	return (
		<>
			<div className={clazz}>
				<a href="/main" className="navigation__link" >Coffee house</a>
				<a href="/coffee" className="navigation__link" id='coffee'>
					Our coffee
				</a>
				<a href="/pleasure" className="navigation__link" id='pleasure'>For your pleasure</a>
			</div>
		</>
	)
}

export default Navigation;