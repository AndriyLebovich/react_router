import { createContext, useContext } from "react";
import { NavLink } from "react-router-dom";
import './UseContext.css'






const userData = {
	title: 'Home',
	text: 'if you watch this - this work)',
	link: '',
};

const UserContext = createContext(userData);



export default function User() {

	return (
		<>
			<UserContext.Provider value={userData}>
				<Main />
			</UserContext.Provider>
		</>
	);
}

function Main() {

	return (
		<main className="main">
			<UserCard />
		</main>
	);
}

function UserCard() {
	return (
		<div className="user__wrapper">
			<UserInfo />
		</div>
	);
}

function UserInfo() {

	const { title, text, link } = useContext(UserContext)

	return (
		<div className="user__info">
			<title className="user__title">{title}</title>
			<p className="user__text">{text}</p>
			<NavLink className="user__link" to={`/${link}`}></NavLink>
		</div>
	)
}







/*




const emptyUser = {
	userName: '',
	age: 0,
	email: '',
	isConfirmed: false,
	employed: '',
};




const userData = {
	userName: 'Vitalii',
	age: 99,
	email: 'my-fv-email@email.ua',
	isConfirmed: false,
	employed: 'Itera',
};

const UserContext = createContext(userData);



export default function User() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		setUser(userData)
	}, []);
	const confirmCardTitle = () => {
		setUser({ ...user, isConfirmed: true });
	};

	return (
		<div className="component-1 component">
			(user ? (
			<UserContext.Provider value={userData}>
				<Main confirmCardTitle={confirmCardTitle} />
			</UserContext.Provider>
			) : (
			'loading'
			))
		</div>
	);
}

function Main({ confirmCardTitle }) {

	return (
		<main className="component-2 component">
			<UserCard confirmCardTitle={confirmCardTitle} />
		</main>
	);
}

function UserCard({ confirmCardTitle }) {
	const { userName, isConfirmed, } = useContext(UserContext)
	return (
		<div className="component-3 component">
			<h1>
				Hello, {userName} {isConfirmed ? '(Verified)' : '(Unconfirmed)'}
			</h1>
			<UserInfo confirmCardTitle={confirmCardTitle} />
		</div>
	);
}

function UserInfo({ confirmCardTitle }) {

	const { userName, age, email, isConfirmed, employed } = useContext(UserContext)

	return (
		<div className="component-4 component">
			<p>Name : {userName}</p>
			<p>Age : {age}</p>
			<p>Email : {email}</p>
			<p>Working at : {employed}</p>
			{isConfirmed ? (
				'Account Confirmed'
			) : (
				<button onClick={confirmCardTitle} type="button">
					Please confirm the account
				</button>
			)}
		</div>
	)
}

*/