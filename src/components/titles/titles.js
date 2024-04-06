import './titles.scss';

function Title({text, color}) {
	const clazz = `title title_${color}`;
	return (
		<h2 className={clazz}>{text}</h2>
	);
}
function Subtitle({text, color}) {
	const clazz = `subtitle subtitle_${color}`;
	return (
		<h3 className={clazz}>{text}</h3>
	);
}

export { Title, Subtitle };