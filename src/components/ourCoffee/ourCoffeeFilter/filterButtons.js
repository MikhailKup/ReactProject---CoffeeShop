const FilterButtons = (props) => {
	const buttonsData = [
		{name: 'All'},
		{name: 'Brazil'},
		{name: 'Kenya'},
		{name: 'Columbia'},
	];

	const buttons = buttonsData.map(({name}) => {
		return (
			<button className="btn" key={name} onClick={() => props.onFilterSelect(name)}>{name}</button>
		)
	});
	return (
		<div className="oc-filter__buttons">
			<p>Or filter</p>
			{buttons}
		</div>
	);
};

export default FilterButtons;