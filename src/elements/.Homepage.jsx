import { NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './Pages.css'


export default function Homepage() {


	// тут хук useEffect задействуется при рендеринге компонента, какого-то изменения в программе
	// Хук привязан к переменной count, поэтому при изменении этой переменной выводится надпись в консоль

	const [count, setCount] = useState(0)

	const onHandleClick = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		if (count > 0) {
			console.log('You try to sign up, but you can`t)')
		}
	}, [count])


	// Это не законченая идея, я не смог ее реализовать. 
	// Идея в том что под логотипом в шапке идет таймер, который считает сколько времени ты находишся на данной странице 
	// Но, не получается збросить таймер при переходе на другую страницу
	// Если знаеш как это зделать, то напиши пожалуйста) достаточно интересно мне стало найти ответ, и в то же время он мне надоел)


	/*

	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const flagInterval = setInterval(() => {
			setTimer(timer + 1);
		}, 1000);
		return () => clearInterval(flagInterval);
	})

	*/


	return (
		<body>
			<div className="wrapper">
				<header className='header'>
					<div className="header__container">
						<div className="header__title">
							<title>The Best Example</title>
						</div>
						<nav className="navigation">
							<NavLink to="/">Home</NavLink>
							<NavLink to="/posts">Blog</NavLink>
							<NavLink to="/about">About</NavLink>
							<NavLink to="/useContext">useContext</NavLink>
						</nav>
						<div className="header__register-button">
							<button onClick={onHandleClick}>Sign up</button>
						</div>
					</div>
				</header>
				<Outlet></Outlet>
				<footer className='footer'>
					<div className="footer__container">
						<div className="footer__navigation">
							<div className="navigation__item">
								<NavLink to="/">To Home</NavLink>
							</div>
							<div className="navigation__item">
								<NavLink to="/posts">To Blog</NavLink>
							</div>
							<div className="navigation__item">
								<NavLink to="/about">To About</NavLink>
							</div>
							<div className="navigation__item">
								<NavLink to="/useContext">useContext</NavLink>
							</div>
						</div>
						<div className="autors">
							<p>@Adriano Povorotti</p>
						</div>
					</div>
				</footer>
			</div>
		</body>
	)
}