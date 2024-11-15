


/*
const emptyCard = {
	title: '',
	text: '',
	link: '',
};
*/





/*
function Card() {
	const { title, text, link } = useContext(CardContext)
	return (
		<div className="card__info">
			<title>{title}</title>
			<p>{text}</p>
			<NavLink >{link}</NavLink>
		</div>
	)
}

*/
/*

/*

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('');

export default function CardsExample() {
	const [theme, setTheme] = useState('');
	return (
		<>
			<ThemeContext.Provider value={theme}>
				<Card />
			</ThemeContext.Provider>
		</>
	)
}

function Card({ children }) {
	return (
		<>
			<Panel title="Welcome">
				<Text />
				<NavLink onClick={() => {
					setTheme(theme === '' ? 'active' : '');
				}} className="blog__item-link" to="/"></NavLink>
			</Panel>
			<Panel title="Welcome">
				<Text />
				<NavLink className="blog__item-link" to="/"></NavLink>
			</Panel>
			<Panel title="Welcome">
				<Text />
				<NavLink className="blog__item-link" to="/"></NavLink>
			</Panel>
			<Panel title="Welcome">
				<Text />
				<NavLink className="blog__item-link" to="/"></NavLink>
			</Panel>
		</>
	);
}

function Panel({ title, children }) {
	const theme = useContext(ThemeContext);
	const className = 'panel ' + theme;
	return (
		<section className={className}>
			<h1>{title}</h1>
			{children}
		</section>
	)
}

function Button({ children, onClick }) {
	const theme = useContext(ThemeContext);
	const className = 'button ' + theme;
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
}
