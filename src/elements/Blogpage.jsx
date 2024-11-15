import { NavLink } from 'react-router-dom'

import './Pages.css'
import './Blogpage.css'


export default function Blogpage() {

	return (
		<main>

			<div className="blog__wrapper">
				<div className="text__blocks">
					<div className="block__text--one">
						<title className='block__title'>
							To Home
						</title>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores tenetur earum doloremque inventore, tempora autem eos dolorem fugit amet sed corporis excepturi quisquam eum nisi quod nemo sit. Eligendi!</p>
						<NavLink className="blog__item-link" to="/"></NavLink>
					</div>
					<div className="block__text--two">
						<title className='block__title'>
							To About
						</title>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, architecto repudiandae aspernatur ad natus quasi at cupiditate vero tenetur aperiam exercitationem fugit libero saepe illo fugiat perferendis praesentium veniam odio?</p>
						<NavLink className="blog__item-link" to="/about"></NavLink>
					</div>
					<div className="block__text--three">
						<title className='block__title'>
							To Blog
						</title>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, in tenetur. Et, molestiae tempora, quaerat dolorum eius magnam, aliquid autem recusandae accusantium assumenda ratione! Odit fuga culpa quasi at repellendus?</p>
						<NavLink className="blog__item-link" to="/posts"></NavLink>
					</div>
					<div className="block__text--four">
						<title className='block__title'>
							To Error
						</title>
						<p>Lorem ipsum Pariatur, vitae. Quasi hic esse sit dignissimos, distinctio nisi quod nihil dolores vel quia velit nesciunt, soluta, harum architecto inventore. Vel, illum?</p>
						<NavLink className="blog__item-link" to="*"></NavLink>
					</div>
				</div>
			</div>

		</main>

	)
}














/*

		<main>
			<div className="blog__wrapper">
				<div className="text__blocks">
					<div className="block__text--one">
						<title className='block__title'>
							To Home
						</title>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores tenetur earum doloremque inventore, tempora autem eos dolorem fugit amet sed corporis excepturi quisquam eum nisi quod nemo sit. Eligendi!</p>
						<NavLink className="blog__item-link" to="/"></NavLink>
					</div>
					<div className="block__text--two">
						<title className='block__title'>
							To About
						</title>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, architecto repudiandae aspernatur ad natus quasi at cupiditate vero tenetur aperiam exercitationem fugit libero saepe illo fugiat perferendis praesentium veniam odio?</p>
						<NavLink className="blog__item-link" to="/about"></NavLink>
					</div>
					<div className="block__text--three">
						<title className='block__title'>
							To Blog
						</title>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, in tenetur. Et, molestiae tempora, quaerat dolorum eius magnam, aliquid autem recusandae accusantium assumenda ratione! Odit fuga culpa quasi at repellendus?</p>
						<NavLink className="blog__item-link" to="/posts"></NavLink>
					</div>
					<div className="block__text--four">
						<title className='block__title'>
							To Error
						</title>
						<p>Lorem ipsum Pariatur, vitae. Quasi hic esse sit dignissimos, distinctio nisi quod nihil dolores vel quia velit nesciunt, soluta, harum architecto inventore. Vel, illum?</p>
						<NavLink className="blog__item-link" to="*"></NavLink>
					</div>
				</div>
			</div>
		</main>

*/