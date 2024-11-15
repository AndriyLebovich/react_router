// Импорт свойства из "react-router-dom" - приложение может выполнять маршрутизацию

import { createBrowserRouter } from 'react-router-dom';


// Страницы прирожения :

import Homepage from './elements/.Homepage';
import Aboutpage from './elements/Aboutpage';
import Blogpage from './elements/Blogpage';
import ErrorPage from './elements/Error-page';
import User from './elements/useContext/UseContext';


// Приложение App

export const App = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
		children: [
			{
				path: "/about",
				element: <Aboutpage />,
			},
			{
				path: "/posts",
				element: <Blogpage />,
			},
			{
				path: "/useContext",
				element: <User />
			}
		]
	}
]);