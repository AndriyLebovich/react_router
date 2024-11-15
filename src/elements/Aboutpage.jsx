import { NavLink } from 'react-router-dom'


import './Pages.css'
import './AboutPage.css'

export default function Aboutpage() {


	return (
		<>
			<main>
				<div className="main__content">
					<div className="main__info">
						<div className="about__title--blue">
							<title className='title--blue'>E-COURSE PLATFORM</title>
						</div>
						<div className="about__title">
							<title className='title'>Learning and teaching online, made easy.</title>
						</div>
						<div className="about__text">
							<p className="about__text">Practice your English and learn new things with the platform.</p>
						</div>
						<NavLink className="about__button" to="/">About platform</NavLink>
					</div>
					<div className="main__img">
						<img src="../../../public/ocean.png" alt="" />
					</div>
				</div>
			</main>
		</>
	)
}